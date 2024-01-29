import { notFound } from "next/navigation";
import Link from "next/link";
import PaginationBlock from "@/components/PaginationBlock/PaginationBlock";
import { WithBootstrap } from "@/components/WithBootstrap";

async function getData(page) {
  const response = await fetch(
    `https://taxivoshod.ru/testapi/?w=list&page=${page}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!response.ok) notFound();
  return response.json();
}

export default async function Page({ params: { page } }) {
  const dataset = await getData(page);
  return (
    <div style={{ height: "100dvh", overflow: "hidden" }}>
      <WithBootstrap>
        <PaginationBlock total_pages={dataset.pages} current={+page} />
        <div
          className="d-flex  flex-md-row align-items-center justify-content-center flex-grow-1 flex-wrap gap-2"
          style={{
            overflow: "auto",
          }}
        >
          {dataset.items.map(({ id, name }) => {
            return (
              <Link
                key={id}
                id={id}
                href={{
                  pathname: `/item/${id}`,
                }}
                className="shadow border my-2 p-4 col-sm-3 mb-1 flex-shrink card btn btn-primary align-self-center justify-content-center"
              >
                <h2 className="display-3 card-title fw-bold text-end"> {id}</h2>
                <div className=" lead text-break  text-start">{name}</div>
              </Link>
            );
          })}
        </div>
      </WithBootstrap>
    </div>
  );
}
