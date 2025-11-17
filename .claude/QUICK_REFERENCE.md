# Claude Desktop Quick Reference Card

## 🚀 Essential Commands

### File Operations
```
Read the [filename]
Show me all [file type] in [directory]
Create a new [type] called [name]
Edit [file] to add [feature]
Delete unused files in [directory]
```

### Git Operations
```
Show the last [N] commits
What changed since last commit?
Create commit with message: "[message]"
Show diff for [filename]
List all branches
Merge [branch] into [current]
```

### Code Analysis
```
Analyze the architecture
Find all TODO comments
Check for security issues
Review [component] for improvements
Explain how [feature] works
```

### Development Tasks
```
Add error handling to [function]
Refactor [component] for better performance
Write tests for [feature]
Add TypeScript types to [file]
Generate documentation for [module]
```

### Debugging
```
Find all console.log statements
Check error handling in [module]
Analyze why [feature] is failing
Review recent error logs
Suggest fixes for [issue]
```

### Deployment
```
Check build configuration
Review deployment workflow
Generate deployment checklist
Create release notes
Test deployment locally
```

## 🎯 Pro Patterns

### Pattern 1: Iterative Development
1. "Read the [component] file"
2. "Add [feature] with proper error handling"
3. "Write tests for the new feature"
4. "Update documentation"

### Pattern 2: Bug Investigation
1. "Show me recent changes to [file]"
2. "Explain what [function] does"
3. "Find potential issues"
4. "Suggest and apply fix"

### Pattern 3: Code Review
1. "Show staged changes"
2. "Review for bugs and improvements"
3. "Check code style consistency"
4. "Generate commit message"

### Pattern 4: Feature Planning
1. "Analyze current [system] architecture"
2. "Suggest approach for [feature]"
3. "List required changes"
4. "Create implementation plan"

## ⌨️ VS Code Shortcuts (Continue Extension)

| Shortcut | Action |
|----------|--------|
| `Ctrl+I` | Inline edit selected code |
| `Ctrl+Shift+P` → Continue | Open command palette |
| `Tab` | Accept AI suggestion |
| `Esc` | Reject AI suggestion |

### Inline Edit Examples
Select code + `Ctrl+I` + type:
- "Add error handling"
- "Convert to async/await"
- "Add TypeScript types"
- "Optimize for performance"
- "Add JSDoc comments"

## 🛠️ Terminal Helper Commands

```bash
# Open project in VS Code with Claude
claude-project [path]

# View staged changes for commit
claude-commit

# Quick git status
git status

# Test build locally
pnpm build

# Run development server
pnpm dev
```

## 💡 Common Workflows

### Morning Startup
```bash
cd ~/Repos/github/blueguard
git pull origin main
pnpm dev
code .
# Open Claude Desktop
```

Then in Claude:
"Show me what changed overnight"
"Review any open PRs"
"What should I work on today?"

### Pre-Commit Checklist
```bash
pnpm check          # Type check
pnpm test           # Run tests
pnpm format         # Format code
git add .
claude-commit       # Review changes
```

Then in Claude:
"Review my staged changes"
"Generate commit message"

### Deployment Workflow
In Claude:
1. "Run build and check for errors"
2. "Review deployment configuration"
3. "Create release notes"
4. "Deploy to production"

## 🎓 Learning Tips

### Start Small
❌ "Build entire authentication system"
✅ "Add login form validation"

### Be Specific
❌ "Fix the bug"
✅ "Fix the null reference error in handleSubmit"

### Use Context
❌ "Add this feature"
✅ "Add user avatar to the Header component in client/src/components/Header.tsx"

### Chain Commands
1. "Read the API documentation"
2. "Now implement it in our code"
3. "Add error handling"
4. "Write tests"

## 🔧 Configuration Files

### MCP Config
`~/.config/Claude/claude_desktop_config.json`
- Filesystem access
- Git operations
- GitHub integration
- Web fetch
- Database access

### Continue Config
`~/.continue/config.json`
- Anthropic API key
- Model settings
- Custom commands
- Context providers

### API Keys Template
`~/.claude-api-keys.template`
Copy and configure with real keys

## 📚 Quick Links

- [Full Guide](~/CLAUDE_DESKTOP_GUIDE.md)
- [Anthropic Console](https://console.anthropic.com/)
- [GitHub Tokens](https://github.com/settings/tokens)
- [MCP Docs](https://modelcontextprotocol.io/)
- [Continue Docs](https://continue.dev/docs)

## 🆘 Emergency Commands

### Reset Everything
```bash
# Backup and reset configs
cp ~/.config/Claude/claude_desktop_config.json ~/.config/Claude/backup.json
cp ~/.continue/config.json ~/.continue/backup.json
bash ~/Repos/github/blueguard/scripts/setup-claude.sh
```

### Test MCP Connection
Open Claude Desktop and try:
"List all files in my blueguard project"

If it works, MCP is configured correctly!

### Test Continue
In VS Code:
1. Open any .tsx file
2. Select some code
3. Press `Ctrl+I`
4. Type "add a comment"

If it works, Continue is configured correctly!

## 🎉 Daily Use Examples

### Monday Morning
"What did we deploy last week?"
"Show me all open TODOs"
"Create this week's development plan"

### Code Review
"Review the PR for [feature]"
"Check for security issues"
"Suggest improvements"

### Bug Fixing
"Why is [feature] broken?"
"Show me recent changes"
"Fix the issue and test it"

### Feature Development
"Plan implementation for [feature]"
"Create the components"
"Write tests"
"Update documentation"

---

**Remember**: Claude Desktop with MCP can see and modify your files. Always review changes before committing!
