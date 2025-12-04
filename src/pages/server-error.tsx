import { Link } from 'react-router-dom';
import { ServerCrash, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTitle } from '@/hooks/use-title';

export function ServerErrorPage() {
  useTitle('服务器错误 - HaloLight');

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-destructive/10 p-6">
            <ServerCrash className="h-24 w-24 text-destructive" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            500
          </h1>
          <h2 className="text-2xl font-semibold text-foreground">
            服务器错误
          </h2>
          <p className="text-base text-muted-foreground">
            抱歉，服务器遇到了问题。我们的团队已经收到通知并正在处理。
          </p>
        </div>

        {/* Error Details (Optional) */}
        {import.meta.env.DEV && (
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-left">
            <p className="text-sm font-medium text-destructive">
              开发模式信息：
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              检查控制台以获取更多详细信息
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="w-full sm:w-auto">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              返回首页
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={handleRefresh}
            className="w-full sm:w-auto"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            刷新页面
          </Button>
        </div>

        {/* Help Text */}
        <p className="text-sm text-muted-foreground">
          如果问题持续存在，请{' '}
          <a
            href="mailto:support@halolight.com"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            联系我们
          </a>
        </p>
      </div>
    </div>
  );
}
