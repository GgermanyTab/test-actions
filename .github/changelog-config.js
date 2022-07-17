module.exports = {
    types: [
        { types: ["feat", "feature"], label: "🎉 New Features" },
        { types: ["fix", "bugfix"], label: "🐛 Bugfixes" },
        { types: ["improvements", "enhancement"], label: "🔨 Improvements" },
        { types: ["perf"], label: "🏎️ Performance Improvements" },
        { types: ["build", "ci"], label: "🏗️ Build System" },
        { types: ["refactor"], label: "🪚 Refactors" },
        { types: ["doc", "docs"], label: "📚 Documentation Changes" },
        { types: ["test", "tests"], label: "🔍 Tests" },
        { types: ["style"], label: "💅 Code Style Changes" },
        { types: ["chore"], label: "🧹 Chores" },
        { types: ["other"], label: "Other Changes" },
    ],

    excludeTypes: ["other"],

    renderTypeSection: function (label, commits) {
        let text = `\n## ${label}\n`;

        commits.forEach((commit) => {
            text += `- [${commit.sha.substring(0, 7)}](${commit.url}) ${commit.subject} by [${commit.author.login}](${commit.author.html_url}) \n`;
        });

        return text;
    },

    renderChangelog: function (release, changes) {
        const now = new Date();
        return `# ${release} - ${now.toISOString().substring(0, 10)} ${now.toISOString().substring(11, 16)}\n` + changes + "\n\n";
    },
};
