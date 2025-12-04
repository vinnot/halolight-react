import { Helmet } from "react-helmet-async"

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>隐私政策 | Admin Pro</title>
        <meta name="description" content="Admin Pro 隐私政策" />
      </Helmet>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">隐私政策</h1>
        <p className="text-muted-foreground">最后更新日期：2024年1月1日</p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">1. 引言</h2>
          <p className="text-muted-foreground leading-relaxed">
            欢迎使用 Admin Pro（以下简称&ldquo;本服务&rdquo;或&ldquo;我们&rdquo;）。我们非常重视您的隐私和个人信息保护。
            本隐私政策将向您说明我们如何收集、使用、存储和保护您的个人信息，
            以及您享有的相关权利。请您在使用本服务前仔细阅读本政策。
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">2. 信息收集</h2>
          <p className="text-muted-foreground leading-relaxed">我们可能收集以下类型的信息：</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>账户信息：</strong>
              当您注册账户时，我们会收集您的姓名、电子邮件地址、密码等基本信息。
            </li>
            <li>
              <strong>使用数据：</strong>
              我们会自动收集您使用服务的相关数据，包括访问时间、浏览页面、点击操作等。
            </li>
            <li>
              <strong>设备信息：</strong>
              我们可能收集您的设备类型、操作系统、浏览器类型、IP地址等技术信息。
            </li>
            <li>
              <strong>Cookie 和类似技术：</strong>
              我们使用 Cookie 和类似技术来提升用户体验和分析服务使用情况。
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">3. 信息使用</h2>
          <p className="text-muted-foreground leading-relaxed">我们收集的信息将用于以下目的：</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>提供、维护和改进我们的服务</li>
            <li>处理您的请求和交易</li>
            <li>发送服务相关的通知和更新</li>
            <li>分析服务使用情况以优化用户体验</li>
            <li>检测和防止欺诈或其他非法活动</li>
            <li>遵守法律法规要求</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">4. 信息安全</h2>
          <p className="text-muted-foreground leading-relaxed">
            我们采取行业标准的安全措施来保护您的个人信息，包括但不限于：
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>使用 SSL/TLS 加密传输数据</li>
            <li>对敏感信息进行加密存储</li>
            <li>实施访问控制和身份验证机制</li>
            <li>定期进行安全审计和漏洞扫描</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">5. 联系我们</h2>
          <p className="text-muted-foreground leading-relaxed">
            如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：
          </p>
          <ul className="list-none pl-0 text-muted-foreground space-y-2 mt-4">
            <li>电子邮件：privacy@halolight.h7ml.cn</li>
            <li>地址：中国北京市</li>
          </ul>
        </section>
      </article>
    </>
  )
}
