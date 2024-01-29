import { checkIsNavBtnDisabled } from "@/utils/paginationUtils";
import React from "react";
import Link from "next/link";

function PaginationBlock({ total_pages = 0, current = 1 }) {
  const nav_status = checkIsNavBtnDisabled(current, total_pages);
  return (
    <nav aria-label="list navigation">
      <ul className="pagination pagination-md p-2">
        <li className="page-item">
          <Link
            className={`page-link ${nav_status.prev}`}
            href={`/list/${current - 1}`}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {[...Array(total_pages)].map((_, index) => {
          const current_page = index + 1;
          return (
            <li
              key={index}
              className={`page-item ${current_page === current ? "active" : ""}`}
            >
              <Link className="page-link" href={`/list/${current_page}`}>
                {current_page}
              </Link>
            </li>
          );
        })}
        <li className="page-item">
          <Link
            className={`page-link  ${nav_status.next}`}
            href={`/list/${1 + current}`}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationBlock;
