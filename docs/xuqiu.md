# Experience Abstraction Wiki 项目需求

基于当前项目的代码框架，开发 Experience Abstraction 的英文 Roblox 攻略站。正式页面类型必须由确认后的当前长尾需求、游戏机制和可靠资料决定，不能因为源模板存在就机械保留。

## 项目身份

- 游戏名称：Experience Abstraction
- 网站名称：Experience Abstraction Wiki
- 游戏平台：Roblox
- 项目目录名：experienceabstraction
- GitHub 仓库名：experienceabstraction
- Cloudflare Worker 项目名：experienceabstraction
- 正式域名：www.experienceabstraction.wiki
- Canonical URL：https://www.experienceabstraction.wiki
- 计划 PRD 文件：docs/experience-abstraction-wiki-prd-and-implementation-plan.md
- 目标数据目录：src/data/experienceabstraction/
- 目标路由组：src/app/[locale]/(experienceabstraction)/

## 官方身份

- Roblox 官方游戏页：https://www.roblox.com/games/131320856116838/Experience-Abstraction
- Roblox Place ID：131320856116838
- Roblox Universe ID：10352185757
- Roblox 创作者：@pawlooz（User）
- Roblox Creator User ID：1693631698
- Roblox 创作者页面：https://www.roblox.com/users/1693631698/profile
- 独立官方网站：not yet verified

身份边界：Roblox 官方游戏描述将 Experience Abstraction 定义为一款受 The Amazing Digital Circus 启发的游戏，并注明 GLITCH 为原作创作者。本站应将 pawlooz 的 Roblox Experience 与原作及 GLITCH 官方内容清楚区分，不能暗示本站、该 Roblox 游戏或其创作者获得 GLITCH 官方背书。

## 核心种子关键词

- experience abstraction
- experience abstraction wiki
- experience abstraction roblox
- experience abstraction guide
- experience abstraction game

codes、tier list、characters、items、maps、endings 等词暂不预设为站点栏目；必须在确认需求包后通过当前搜索需求与游戏机制核验，再标记 keep、ignore、watch 或 localize_later。

## 开发要求

1. 搜索并核验当前游戏玩法、更新状态和长尾搜索需求，建立 keep / ignore / watch / localize_later 关键词矩阵，再决定页面、导航、实体命名和内容规模。
2. 必须以完整游戏名 Experience Abstraction 作为 head keyword，按照 wiki-site-growth-iteration 的 Serper API 长尾发现流程进行专项扫描：至少执行一次 head-keyword autocomplete，并对核心种子词执行 related searches / People Also Ask 提取；可结合 map、locations、codes、tier list、guide、characters、items、wiki、update 等修饰词发现候选，但不能因为模板栏目而预设这些词有效。记录 Serper 使用模式与大致请求量，整理并去重候选词，再执行一词一页覆盖检查。Serper 默认仅用于长尾候选发现，不批量查询每个候选词的 SERP；选中的高价值词再通过普通网页搜索、YouTube、Reddit、官方来源与竞品页面核验。此项为用户明确指定的新项目专项扫描，不受未标优先级站点默认不使用 Serper 的限制。
3. 以 Roblox 官方游戏页、Roblox API、创作者页面和当前可靠攻略来源交叉核验事实。清除源模板 Universal Tower Defense Z 的名称、域名、Place/Universe ID、创作者、代码、单位、素材、路由和配置残留。
4. 网站视觉应参考 Experience Abstraction 当前 Roblox 图标、缩略图和游戏氛围，不沿用源模板的塔防视觉、配色或素材。
5. 根据真实需求判断是否建设 guides、how-to、mechanics、locations、characters、items、codes、status 或其他页面。没有可靠数据支持的页面不要伪造；可使用高质量 YouTube 视频作为研究来源，写成独立、面向玩家决策的英文攻略，不能机械转录或改写视频。
6. 首页与导航应作为信息密集的 SEO hub，覆盖经核验的高价值次级关键词，并提供桌面端 sticky wiki sidebar 与移动端可展开 wiki menu。
7. 开发完成并验证后，在 GitHub 创建 experienceabstraction 仓库并推送项目。
8. 在 Cloudflare Workers 创建 experienceabstraction 项目，绑定 experienceabstraction.wiki 与 www.experienceabstraction.wiki，以 www 为 canonical，并在权限允许时配置 GitHub 自动构建。
9. 在 GA4 创建或复用与正式域名对应的媒体资源和 Web 数据流，授权方式与站点注册信息从 /Users/he/Documents/AI/vibe coding/GA-GTM 获取并同步。
10. 本地验证与上线步骤完成后，按 wiki-site-builder 规范将站点幂等注册到 Shipmanager；第二个核心链接必须从实际实现且需求最强的 hub 中选择，不能预设为 codes 或 tier list。
