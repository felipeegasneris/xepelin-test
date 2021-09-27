import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { Fragment, LegacyRef, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { PostType, usePostService } from '@xepelin-test/core';
export default function List() {
  const { getPaginated } = usePostService();
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery(
    'projects',
    async ({ pageParam = 1 }) => {
      return getPaginated(pageParam);
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextId,
    }
  );

  const loadMoreButtonRef = useRef<HTMLButtonElement>();

  useIntersectionObserver({
    // @ts-ignore
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage ?? false,
  });

  return (
    <div>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        // @ts-ignore
        <span>Error: {error.message}</span>
      ) : (
        <Box>
          {data &&
            data.pages.map((page) => (
              <Box key={page.nextId}>
                {page.data.map((post) => (
                  <div
                    style={{
                      border: '1px solid gray',
                      borderRadius: '5px',
                      padding: '1rem',
                    }}
                    key={post.id}
                  >
                    {post.id}
                    {post.title}
                  </div>
                ))}
              </Box>
            ))}
          <div>
            <button
              ref={loadMoreButtonRef as LegacyRef<HTMLButtonElement>}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load Newer'
                : 'Nothing more to load'}
            </button>
          </div>
          <div>
            {isFetching && !isFetchingNextPage
              ? 'Background Updating...'
              : null}
          </div>
        </Box>
      )}
      <hr />
    </div>
  );
}
