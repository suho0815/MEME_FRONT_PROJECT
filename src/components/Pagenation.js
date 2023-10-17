/** 페이지네이션 컴포넌트 */
import {useState, useEffect} from 'react'
import {
  PagenationBtn,
  PagenationCurrBtn,
  PagenationFrame,
  PagenationArrowBtn
} from '../styled/Pagenation/StyledPagenation'

export const Pagenation = ({total, limit, page, setPage}) => {
  const numPages = Math.ceil(total / limit)

  const [minPage, setMinPage] = useState(1)
  const [maxPage, setMaxPage] = useState(Math.min(numPages, 10))

  useEffect(() => {
    if (numPages <= 10) {
      setMinPage(1)
      setMaxPage(numPages)
    } else {
      const halfMax = Math.floor(10 / 2)

      if (page <= halfMax) {
        setMinPage(1)
        setMaxPage(10)
      } else if (page > halfMax && page + halfMax <= numPages) {
        setMinPage(page - halfMax)
        setMaxPage(page + halfMax)
      } else {
        setMinPage(numPages - 9)
        setMaxPage(numPages)
      }
    }
  }, [page, numPages])

  const pageNumbersToShow =
    numPages !== 0 ? Array.from({length: maxPage - minPage + 1}, (_, i) => i + minPage) : Array(10).map((_, i) => i)

  return (
    <PagenationFrame>
      <PagenationArrowBtn onClick={() => setPage(1)} disabled={page === 1}>
        &lt;&lt;
      </PagenationArrowBtn>
      <PagenationArrowBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </PagenationArrowBtn>

      {pageNumbersToShow.map(pageNumber =>
        page === pageNumber ? (
          <PagenationCurrBtn
            key={pageNumber}
            onClick={() => {
              setPage(pageNumber)
            }}
            aria-current={page === pageNumber ? 'page' : undefined}>
            {pageNumber}
          </PagenationCurrBtn>
        ) : (
          <PagenationBtn
            key={pageNumber}
            onClick={() => {
              setPage(pageNumber)
            }}
            aria-current={page === pageNumber ? 'page' : undefined}>
            {pageNumber}
          </PagenationBtn>
        )
      )}

      <PagenationArrowBtn onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </PagenationArrowBtn>
      <PagenationArrowBtn onClick={() => setPage(numPages)} disabled={page === numPages}>
        &gt;&gt;
      </PagenationArrowBtn>
    </PagenationFrame>
  )
}
