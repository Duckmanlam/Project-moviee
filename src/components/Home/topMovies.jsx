
const data = {
  "rating": [
    {
      "id": "65159c8cbf54a316e45e7526",
      "title": "Stranger Thing: Season 1",
      "posterImage": "https://lh3.google.com/u/0/d/1h763ap7qUPuZw7AaFGDjqAMkVmfE9-Fk=w1920-h963-iv1",
      "mpaRatings": "PG-13",
      "value": 5,
      "genre": [
        {
          "id": "65159c8bbf54a316e45e7508",
          "name": "Drama"
        },
        {
          "id": "65159c8bbf54a316e45e750f",
          "name": "Science Fiction"
        },
        {
          "id": "65159c8bbf54a316e45e7510",
          "name": "Horror"
        },
        {
          "id": "65159c8bbf54a316e45e7511",
          "name": "Mystery"
        }
      ]
    },
    {
      "id": "65159c8cbf54a316e45e7527",
      "title": "Stranger Thing: Season 1",
      "posterImage": "https://lh3.google.com/u/0/d/1h763ap7qUPuZw7AaFGDjqAMkVmfE9-Fk=w1920-h963-iv1",
      "mpaRatings": "PG-13",
      "value": 4,
      "genre": [
        {
          "id": "65159c8bbf54a316e45e7508",
          "name": "Drama"
        },
        {
          "id": "65159c8bbf54a316e45e750f",
          "name": "Science Fiction"
        },
        {
          "id": "65159c8bbf54a316e45e7510",
          "name": "Horror"
        },
        {
          "id": "65159c8bbf54a316e45e7511",
          "name": "Mystery"
        }
      ]
    },
    {
      "id": "65159c8cbf54a316e45e7528",
      "title": "Spider-Man",
      "posterImage": "https://lh3.google.com/u/0/d/1h763ap7qUPuZw7AaFGDjqAMkVmfE9-Fk=w1920-h963-iv1",
      "mpaRatings": "PG-13",
      "value": 4,
      "genre": [
        {
          "id": "65159c8bbf54a316e45e7508",
          "name": "Drama"
        },
        {
          "id": "65159c8bbf54a316e45e750f",
          "name": "Science Fiction"
        },
        {
          "id": "65159c8bbf54a316e45e7510",
          "name": "Horror"
        },
        {
          "id": "65159c8bbf54a316e45e7511",
          "name": "Mystery"
        }
      ]
    }
  ]
};

export default function TopMovies() {
  return (
    <div>
      <h1 className="text-20-700 dark:text-Grayscale10">Top Movies</h1>
      {data.rating.map((movie, index) => (
        <div key={index} className="mt-4">
          <div className="flex">
            <img
              className=""
              src={movie.posterImage}
              alt={movie.title}
            />
            <div className="ml-4 flex flex-col space-y-3 justify-center">
              <button className="flex items-center justify-center rounded-lg border border-gray-300 px-2 py-1 w-2/5">
                <p className="text-xs font-medium text-Grayscale60 dark:text-Grayscale40">
                  {movie.mpaRatings}
                </p>
              </button>
              <h1 className="text-16-700 mt-2 text-Grayscale100 dark:text-Grayscale10">
                {movie.title}
              </h1>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M12.1733 2.5H3.82667C3.3422 2.5 2.87758 2.69245 2.53502 3.03502C2.19245 3.37758 2 3.8422 2 4.32667V12.6733C2 13.1578 2.19245 13.6224 2.53502 13.965C2.87758 14.3075 3.3422 14.5 3.82667 14.5H12.1733C12.6578 14.5 13.1224 14.3075 13.465 13.965C13.8075 13.6224 14 13.1578 14 12.6733V4.32667C14 3.8422 13.8075 3.37758 13.465 3.03502C13.1224 2.69245 12.6578 2.5 12.1733 2.5ZM4.66667 7.83333H3.33333V6.5H4.66667V7.83333ZM3.33333 9.16667H4.66667V10.5H3.33333V9.16667ZM12.6667 7.83333H11.3333V6.5H12.6667V7.83333ZM11.3333 9.16667H12.6667V10.5H11.3333V9.16667ZM12.6667 4.32667V5.16667H11.3333V3.83333H12.1733C12.2381 3.83333 12.3023 3.84609 12.3621 3.87089C12.422 3.89568 12.4764 3.93202 12.5222 3.97783C12.568 4.02364 12.6043 4.07802 12.6291 4.13788C12.6539 4.19773 12.6667 4.26188 12.6667 4.32667ZM3.82667 3.83333H4.66667V5.16667H3.33333V4.32667C3.33333 4.26188 3.34609 4.19773 3.37089 4.13788C3.39568 4.07802 3.43202 4.02364 3.47783 3.97783C3.52364 3.93202 3.57802 3.89568 3.63788 3.87089C3.69773 3.84609 3.76188 3.83333 3.82667 3.83333ZM3.33333 12.6733V11.8333H4.66667V13.1667H3.82667C3.76188 13.1667 3.69773 13.1539 3.63788 13.1291C3.57802 13.1043 3.52364 13.068 3.47783 13.0222C3.43202 12.9764 3.39568 12.922 3.37089 12.8621C3.34609 12.8023 3.33333 12.7381 3.33333 12.6733ZM12.6667 12.6733C12.6667 12.8042 12.6147 12.9297 12.5222 13.0222C12.4297 13.1147 12.3042 13.1667 12.1733 13.1667H11.3333V11.8333H12.6667V12.6733Z" fill="#78828A" />
                  <defs>
                    <clipPath id="clip0_201_5168">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-12-500 text-Grayscale70 ml-1 ">{movie.genre[0].name} • {movie.genre[1].name}</p>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <path d="M10.4416 1.42495L11.9083 4.35828C12.1083 4.76662 12.6416 5.15828 13.0916 5.23328L15.7499 5.67495C17.4499 5.95828 17.8499 7.19162 16.6249 8.40828L14.5583 10.4749C14.2083 10.8249 14.0166 11.4999 14.1249 11.9833L14.7166 14.5416C15.1833 16.5666 14.1083 17.3499 12.3166 16.2916L9.82492 14.8166C9.37492 14.5499 8.63326 14.5499 8.17492 14.8166L5.68326 16.2916C3.89992 17.3499 2.81659 16.5583 3.28326 14.5416L3.87492 11.9833C3.98326 11.4999 3.79159 10.8249 3.44159 10.4749L1.37492 8.40828C0.158257 7.19162 0.549924 5.95828 2.24992 5.67495L4.90826 5.23328C5.34992 5.15828 5.88326 4.76662 6.08326 4.35828L7.54992 1.42495C8.34992 -0.166715 9.64992 -0.166715 10.4416 1.42495Z" fill="#FFCD1A" />
                </svg>
                <p className="text-16-600 text-Grayscale100 ml-1 dark:text-Grayscale10">
                  {movie.value}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
