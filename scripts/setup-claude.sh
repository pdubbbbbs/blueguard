#!/bin/bash

# Claude Desktop & Development Environment Setup Script
# Automates installation and configuration of Claude integrations

set -e

echo "🤖 Claude Development Environment Setup"
echo "========================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    print_error "Please do not run as root"
    exit 1
fi

# 1. Check for required tools
echo "📋 Checking prerequisites..."

# Check Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    print_success "Node.js installed: $NODE_VERSION"
else
    print_error "Node.js not found. Installing..."
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Check npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    print_success "npm installed: $NPM_VERSION"
else
    print_error "npm not found"
    exit 1
fi

# Check pnpm
if command -v pnpm &> /dev/null; then
    print_success "pnpm installed"
else
    print_info "Installing pnpm..."
    sudo npm install -g pnpm
    print_success "pnpm installed"
fi

# Check VS Code
if command -v code &> /dev/null; then
    print_success "VS Code installed"
else
    print_info "VS Code not found. You may want to install it."
fi

# 2. Install Continue extension for VS Code
if command -v code &> /dev/null; then
    echo ""
    echo "🔌 Installing VS Code extensions..."

    if code --list-extensions | grep -q "continue.continue"; then
        print_success "Continue extension already installed"
    else
        code --install-extension continue.continue
        print_success "Continue extension installed"
    fi
fi

# 3. Setup MCP configuration
echo ""
echo "⚙️  Setting up MCP configuration..."

CLAUDE_CONFIG_DIR="$HOME/.config/Claude"
mkdir -p "$CLAUDE_CONFIG_DIR"

# Backup existing config if it exists
if [ -f "$CLAUDE_CONFIG_DIR/claude_desktop_config.json" ]; then
    cp "$CLAUDE_CONFIG_DIR/claude_desktop_config.json" "$CLAUDE_CONFIG_DIR/claude_desktop_config.json.backup"
    print_info "Backed up existing config"
fi

print_success "MCP configuration directory ready"

# 4. Install MCP servers globally
echo ""
echo "📦 Installing MCP servers..."

MCP_SERVERS=(
    "@modelcontextprotocol/server-filesystem"
    "@modelcontextprotocol/server-git"
    "@modelcontextprotocol/server-github"
    "@modelcontextprotocol/server-fetch"
    "@modelcontextprotocol/server-brave-search"
    "@modelcontextprotocol/server-postgres"
    "@modelcontextprotocol/server-sequential-thinking"
)

for server in "${MCP_SERVERS[@]}"; do
    print_info "Caching $server..."
    npx -y "$server" --version &> /dev/null || true
done

print_success "MCP servers cached"

# 5. Setup Continue configuration
echo ""
echo "🔧 Setting up Continue configuration..."

CONTINUE_CONFIG_DIR="$HOME/.continue"
mkdir -p "$CONTINUE_CONFIG_DIR"

if [ -f "$CONTINUE_CONFIG_DIR/config.json" ]; then
    print_success "Continue config already exists"
else
    print_info "Continue config will be created on first run"
fi

# 6. Create helper scripts
echo ""
echo "🛠️  Creating helper scripts..."

SCRIPT_DIR="$HOME/.local/bin"
mkdir -p "$SCRIPT_DIR"

# Create claude-project script
cat > "$SCRIPT_DIR/claude-project" << 'EOF'
#!/bin/bash
# Quick command to open current project in VS Code with Claude
PROJECT_DIR="${1:-.}"
cd "$PROJECT_DIR"
code .
echo "Opened $PROJECT_DIR in VS Code"
echo "Use Ctrl+I to start Claude inline editing"
echo "Use Ctrl+Shift+P -> 'Continue' for more commands"
EOF

chmod +x "$SCRIPT_DIR/claude-project"
print_success "Created 'claude-project' command"

# Create claude-commit script
cat > "$SCRIPT_DIR/claude-commit" << 'EOF'
#!/bin/bash
# AI-assisted git commit message generator
DIFF=$(git diff --staged)
if [ -z "$DIFF" ]; then
    echo "No staged changes. Stage changes with 'git add' first."
    exit 1
fi

echo "Staged changes detected. Use Claude to generate commit message:"
echo "$DIFF" | head -50
echo ""
echo "Tip: Ask Claude in Desktop: 'Generate a commit message for these changes'"
EOF

chmod +x "$SCRIPT_DIR/claude-commit"
print_success "Created 'claude-commit' helper"

# Add to PATH if not already there
if [[ ":$PATH:" != *":$HOME/.local/bin:"* ]]; then
    echo "" >> "$HOME/.bashrc"
    echo "# Add local scripts to PATH" >> "$HOME/.bashrc"
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.bashrc"
    print_success "Added $SCRIPT_DIR to PATH (restart shell to apply)"
fi

# 7. Setup environment variables template
echo ""
echo "🔐 Setting up API keys template..."

ENV_TEMPLATE="$HOME/.claude-api-keys.template"
cat > "$ENV_TEMPLATE" << 'EOF'
# Claude Development Environment API Keys
# Copy this to ~/.claude-api-keys and fill in your actual keys

# Anthropic API Key (for Continue extension)
# Get from: https://console.anthropic.com/
export ANTHROPIC_API_KEY="sk-ant-..."

# GitHub Personal Access Token (for MCP GitHub integration)
# Get from: https://github.com/settings/tokens
export GITHUB_TOKEN="ghp_..."

# Brave Search API Key (optional, for MCP search)
# Get from: https://brave.com/search/api/
export BRAVE_API_KEY="BSA..."

# Cloudflare API Token (for deployments)
export CLOUDFLARE_API_TOKEN="your-token"
export CLOUDFLARE_ACCOUNT_ID="your-account-id"
EOF

print_success "Created API keys template at $ENV_TEMPLATE"

# 8. Create a quick start guide
GUIDE_PATH="$HOME/CLAUDE_DESKTOP_GUIDE.md"
print_info "Creating quick start guide..."

cat > "$GUIDE_PATH" << 'EOF'
# Claude Desktop Quick Start Guide

## 🚀 Getting Started

### 1. Install Claude Desktop
Download and install from: https://claude.ai/download

### 2. Configure API Keys

#### For Continue (VS Code):
1. Open VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type "Continue: Open Config"
4. Add your Anthropic API key

#### For MCP (Claude Desktop):
1. Get your API keys:
   - Anthropic: https://console.anthropic.com/
   - GitHub: https://github.com/settings/tokens
2. Edit `~/.config/Claude/claude_desktop_config.json`
3. Replace placeholder tokens with real ones
4. Restart Claude Desktop

### 3. Restart Applications
- Close and reopen VS Code
- Close and reopen Claude Desktop

## 🎯 How to Use Claude Desktop

### Basic Chat
1. Open Claude Desktop app
2. Start a new conversation
3. Claude now has access to your project files via MCP!

### Powerful Commands

#### File Operations
- "Read the Home.tsx file"
- "Show me all TypeScript files in the server directory"
- "Create a new component called UserProfile"
- "Edit the package.json to add a new script"

#### Git Operations
- "Show me the last 5 commits"
- "What files have been changed since the last commit?"
- "Create a commit with message: 'Add user authentication'"
- "Show me the diff for client/src/App.tsx"

#### Code Analysis
- "Analyze the architecture of this project"
- "Find all TODO comments in the codebase"
- "Check for security vulnerabilities in dependencies"
- "Suggest improvements for the Home.tsx component"

#### Web Development
- "Fetch the latest React documentation"
- "Search for 'TypeScript best practices 2025'"
- "Get the content from https://docs.cloudflare.com"

#### Database
- "Show me all tables in the database"
- "Query the users table"
- "Explain the database schema"

### Advanced Workflows

#### Code Review Workflow
1. "Show me changes in the current branch"
2. "Review these changes and suggest improvements"
3. "Check for potential bugs or security issues"
4. "Generate a code review summary"

#### Deployment Workflow
1. "Check if the build passes locally"
2. "Review the deployment configuration"
3. "Generate a deployment checklist"
4. "Create a release notes draft"

#### Debugging Workflow
1. "Find all console.log statements"
2. "Check error handling in API routes"
3. "Analyze the latest error logs"
4. "Suggest fixes for common issues"

## 🔌 VS Code Integration (Continue)

### Quick Commands
- **Ctrl+I** (Cmd+I): Inline code editing
- **Ctrl+Shift+P** > "Continue": Access all commands
- **Tab**: Accept AI autocomplete suggestions

### Common Use Cases

#### Edit Selected Code
1. Select code in editor
2. Press `Ctrl+I`
3. Type what you want: "Add error handling" or "Refactor this"
4. Accept or modify the suggestion

#### Generate Comments
1. Select function/class
2. Right-click > "Continue: Comment"
3. AI-generated documentation appears

#### Ask About Code
1. Select code
2. Right-click > "Continue: Ask"
3. Type your question in sidebar

#### Terminal Commands
1. Open Continue chat
2. Type "/cmd" followed by what you need
3. Example: "/cmd deploy to production"

## 🎓 Pro Tips

### 1. Context is Everything
Always provide context:
- ✅ "In the Home.tsx file, add a new section for testimonials"
- ❌ "Add testimonials"

### 2. Iterative Refinement
Start broad, then refine:
1. "Show me the project structure"
2. "Focus on the server directory"
3. "Explain how authentication works"

### 3. Use Sequential Thinking
For complex tasks:
- "Let's think through this step by step: how should we implement user authentication?"

### 4. Combine Tools
- "Search for best practices, then apply them to our code"
- "Fetch documentation and create examples based on it"

### 5. Save Time with Aliases
Add to ~/.bashrc:
```bash
alias claude-review="echo 'Review the current git diff' | pbcopy"
alias claude-commit="git diff --staged | head -50"
```

## 🛠️ Helper Commands Created

### claude-project
Open current directory in VS Code with Claude ready
```bash
claude-project /path/to/project
```

### claude-commit
Show staged changes for AI commit message generation
```bash
git add .
claude-commit
# Then ask Claude Desktop to generate commit message
```

## 📚 Resources

- **Claude Desktop Docs**: https://docs.anthropic.com/
- **MCP Documentation**: https://modelcontextprotocol.io/
- **Continue Docs**: https://continue.dev/docs
- **Anthropic Console**: https://console.anthropic.com/

## 🐛 Troubleshooting

### MCP Servers Not Working
1. Check `~/.config/Claude/claude_desktop_config.json`
2. Verify API keys are correct
3. Restart Claude Desktop
4. Check logs: `~/.config/Claude/logs/`

### Continue Not Responding
1. Check API key in Continue config
2. Verify internet connection
3. Check Anthropic API status
4. Restart VS Code

### Commands Not Found
1. Ensure `~/.local/bin` is in PATH
2. Run: `export PATH="$HOME/.local/bin:$PATH"`
3. Restart terminal

## 💡 Example Conversations

### Example 1: Feature Development
**You**: "I need to add a contact form to the website"
**Claude**: *Analyzes current structure, suggests implementation*
**You**: "Create the component"
**Claude**: *Creates ContactForm.tsx with validation*
**You**: "Add it to the Home page"
**Claude**: *Updates Home.tsx with new component*

### Example 2: Bug Fixing
**You**: "The deployment is failing, check the logs"
**Claude**: *Reviews GitHub Actions logs, identifies issue*
**You**: "Fix the workflow file"
**Claude**: *Updates .github/workflows/deploy.yml*
**You**: "Test locally first"
**Claude**: *Provides test commands*

### Example 3: Code Review
**You**: "Review the changes I just made"
**Claude**: *Analyzes git diff, provides feedback*
**You**: "Apply your suggestions"
**Claude**: *Makes improvements*
**You**: "Generate commit message"
**Claude**: *Creates descriptive commit message*

## 🎉 You're Ready!

Start using Claude Desktop to supercharge your development workflow!
EOF

print_success "Created guide at $GUIDE_PATH"

# 9. Final instructions
echo ""
echo "=========================================="
echo "🎉 Setup Complete!"
echo "=========================================="
echo ""
print_success "Claude development environment is ready!"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Install Claude Desktop:"
echo "   Download from: https://claude.ai/download"
echo ""
echo "2. Get your API keys:"
echo "   - Anthropic: https://console.anthropic.com/"
echo "   - GitHub: https://github.com/settings/tokens"
echo ""
echo "3. Configure API keys:"
echo "   - For Continue: VS Code -> Ctrl+Shift+P -> 'Continue: Open Config'"
echo "   - For MCP: Edit ~/.config/Claude/claude_desktop_config.json"
echo ""
echo "4. Read the guide:"
echo "   cat ~/CLAUDE_DESKTOP_GUIDE.md"
echo ""
echo "5. Test the setup:"
echo "   - Open Claude Desktop"
echo "   - Try: 'Read the CLAUDE.md file from my blueguard project'"
echo ""
print_info "Restart your terminal to use new commands: claude-project, claude-commit"
echo ""
