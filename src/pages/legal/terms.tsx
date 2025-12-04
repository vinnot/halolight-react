import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>服务条款 | Admin Pro</title>
        <meta name="description" content="Admin Pro 服务条款" />
      </Helmet>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">服务条款</h1>
        <p className="text-muted-foreground">最后更新日期：2024年1月1日</p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">1. 服务协议的接受</h2>
          <p className="text-muted-foreground leading-relaxed">
            欢迎使用 Admin Pro（以下简称&ldquo;本服务&rdquo;）。本服务条款（以下简称&ldquo;本条款&rdquo;）是您与 Halolight
            之间关于使用本服务的法律协议。通过访问或使用本服务，您表示已阅读、理解并同意受本条款的约束。
            如果您不同意本条款的任何内容，请勿使用本服务。
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">2. 服务描述</h2>
          <p className="text-muted-foreground leading-relaxed">
            Admin Pro 是一个企业级后台管理系统，提供用户管理、数据分析、文档协作等功能。
            我们保留随时修改、暂停或终止服务的权利，恕不另行通知。
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">3. 用户账户</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>注册：</strong>
              使用本服务需要创建账户。您必须提供准确、完整、最新的注册信息。
            </li>
            <li>
              <strong>账户安全：</strong>
              您有责任保护账户凭据的安全，并对账户下的所有活动负责。
            </li>
            <li>
              <strong>账户限制：</strong>
              每人仅限注册一个账户，禁止共享账户或转让账户。
            </li>
            <li>
              <strong>账户终止：</strong>
              我们保留因违反本条款而暂停或终止账户的权利。
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">4. 使用规则</h2>
          <p className="text-muted-foreground leading-relaxed">使用本服务时，您同意不会：</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>违反任何适用的法律法规</li>
            <li>侵犯他人的知识产权或其他权利</li>
            <li>上传、传播恶意软件或有害内容</li>
            <li>干扰或破坏服务的正常运行</li>
            <li>未经授权访问他人账户或数据</li>
            <li>使用自动化工具大规模采集数据</li>
            <li>进行任何可能损害我们或其他用户利益的行为</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">5. 知识产权</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>我们的权利：</strong>
              本服务及其所有内容（包括但不限于软件、文本、图像、商标）均为我们或授权方的财产，
              受知识产权法保护。
            </li>
            <li>
              <strong>用户内容：</strong>
              您保留对上传内容的所有权，但授予我们使用、存储和处理该内容以提供服务的许可。
            </li>
            <li>
              <strong>反馈：</strong>
              您提供的任何反馈或建议可被我们自由使用，无需补偿。
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">6. 隐私保护</h2>
          <p className="text-muted-foreground leading-relaxed">
            我们重视您的隐私。有关我们如何收集、使用和保护您的个人信息，请参阅我们的
            <Link to="/privacy" className="text-primary hover:underline">
              隐私政策
            </Link>
            。使用本服务即表示您同意我们的隐私政策。
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">7. 免责声明</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              本服务按&ldquo;现状&rdquo;和&ldquo;可用性&rdquo;提供，不作任何明示或暗示的保证。
            </li>
            <li>
              我们不保证服务将不间断、无错误或完全安全。
            </li>
            <li>
              对于因使用本服务而产生的任何直接、间接、附带、特殊或后果性损害，
              我们不承担责任。
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">8. 联系方式</h2>
          <p className="text-muted-foreground leading-relaxed">
            如果您对本条款有任何疑问，请通过以下方式联系我们：
          </p>
          <ul className="list-none pl-0 text-muted-foreground space-y-2 mt-4">
            <li>电子邮件：legal@halolight.h7ml.cn</li>
            <li>地址：中国北京市</li>
          </ul>
        </section>
      </article>
    </>
  )
}
