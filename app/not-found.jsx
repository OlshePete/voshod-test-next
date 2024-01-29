import { WithBootstrap } from "@/components/WithBootstrap";
import Link from "next/link";

export default function NotFound() {
  return (
      <WithBootstrap>
           <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Ой-ой!</span> Страница не найдена.</p>
                <p class="lead">
                    Страница, которую вы вызываете не существует.
                  </p>
                <Link href="/" className="btn btn-success">На главную</Link>
            </div>
        </div>
    </WithBootstrap>
  );
}
