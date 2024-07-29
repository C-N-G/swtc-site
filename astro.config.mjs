import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian from 'starlight-obsidian';
import { groupedItems } from './src/helpers/getGroups';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Secrets Within the Compound Pedia',
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
      plugins: [
        // Generate the Obsidian vault pages.
        starlightObsidian({
          // vault: './vault/',
          vault: './vault-reduced/',
          output: 'swtcpedia',
          autoLinkHeadings: true,
          copyStarlightFrontmatter: true,
          tableOfContentsOverview: "title",
        }),
      ],
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
        ...groupedItems
			],
		}),
	],
});
