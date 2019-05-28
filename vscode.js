{
    // VSCode Main Config
    "workbench.colorTheme": "Dracula",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.activityBar.visible": true,
    "workbench.editor.tabCloseButton": "off",
    "workbench.startupEditor": "newUntitledFile",
    "extensions.ignoreRecommendations": false,

    // Fonts
    "editor.fontSize": 18,
    "editor.lineHeight": 24,
    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true,

    // Editor Rules
    "editor.rulers": [80, 120],
    "editor.formatOnPaste": true,
    "prettier.eslintIntegration": true,
    "editor.trimAutoWhitespace": true,
    "editor.tabSize": 2,
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "nunjucks": "html"
    },

    // Editor UI
    "editor.cursorBlinking": "expand",
    "editor.renderLineHighlight": "gutter",
    "window.zoomLevel": 0,
    "window.title": "${dirty} ${activeEditorMedium}${separator}${rootName}",
    "editor.mouseWheelZoom": false,
    
    // Terminal
    "terminal.integrated.fontSize": 14,

    // Analytics
    "telemetry.enableTelemetry": false,
    "codemetrics.basics.CodeLensEnabled": true,
    "codemetrics.nodeconfiguration.ReturnStatement": 0,
    "codemetrics.nodeconfiguration.CaseClause": 0,
    "codemetrics.nodeconfiguration.DefaultClause": 0,
    "cSpell.enabledLanguageIds": [
        "css",
        "dart",
        "git-commit",
        "html",
        "javascript",
        "javascriptreact",
        "json",
        "plaintext",
        "text",
        "typescript",
        "typescriptreact",
        "yaml",
        "yml"
    ],

    // TODO
    "todo-tree.defaultHighlight": {
        "foreground": "green",
        "type": "none"
    },
    "todo-tree.customHighlight": {
        "TODO": {},
        "FIXME": {}
    },

    // Git
    "gitlens.codeLens.recentChange.enabled": false,
    "gitlens.codeLens.authors.enabled": false,
    "gitlens.codeLens.enabled": false,
}