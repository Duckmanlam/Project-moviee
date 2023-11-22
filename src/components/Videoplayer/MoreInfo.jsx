export default function MoreInfo() {
  const handleShare = () => {
    // Replace 'YOUR_VIDEO_URL' with the actual video URL you want to share
    const videoUrl = "https://youtu.be/-tpLfKaYD4g";
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${videoUrl}`;

    window.open(facebookUrl, "_blank");
  };
  return (
    <div>
      <div className="flex items-center justify-center rounded-lg border border-gray-300 px-2 py-1 w-16">
        <p className="text-xs font-medium text-Grayscale60 dark:text-Grayscale40 ">
          PG-12{" "}
        </p>
      </div>
      <div className="flex justify-between dark:text-white">
        <div>
          <p className="text-24-700 "> Stranger Thing</p>
          <div className="flex mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g>
                <path
                  d="M12.1733 2H3.82667C3.3422 2 2.87758 2.19245 2.53502 2.53502C2.19245 2.87758 2 3.3422 2 3.82667V12.1733C2 12.6578 2.19245 13.1224 2.53502 13.465C2.87758 13.8075 3.3422 14 3.82667 14H12.1733C12.6578 14 13.1224 13.8075 13.465 13.465C13.8075 13.1224 14 12.6578 14 12.1733V3.82667C14 3.3422 13.8075 2.87758 13.465 2.53502C13.1224 2.19245 12.6578 2 12.1733 2ZM4.66667 7.33333H3.33333V6H4.66667V7.33333ZM3.33333 8.66667H4.66667V10H3.33333V8.66667ZM12.6667 7.33333H11.3333V6H12.6667V7.33333ZM11.3333 8.66667H12.6667V10H11.3333V8.66667ZM12.6667 3.82667V4.66667H11.3333V3.33333H12.1733C12.2381 3.33333 12.3023 3.34609 12.3621 3.37089C12.422 3.39568 12.4764 3.43202 12.5222 3.47783C12.568 3.52364 12.6043 3.57802 12.6291 3.63788C12.6539 3.69773 12.6667 3.76188 12.6667 3.82667ZM3.82667 3.33333H4.66667V4.66667H3.33333V3.82667C3.33333 3.76188 3.34609 3.69773 3.37089 3.63788C3.39568 3.57802 3.43202 3.52364 3.47783 3.47783C3.52364 3.43202 3.57802 3.39568 3.63788 3.37089C3.69773 3.34609 3.76188 3.33333 3.82667 3.33333ZM3.33333 12.1733V11.3333H4.66667V12.6667H3.82667C3.76188 12.6667 3.69773 12.6539 3.63788 12.6291C3.57802 12.6043 3.52364 12.568 3.47783 12.5222C3.43202 12.4764 3.39568 12.422 3.37089 12.3621C3.34609 12.3023 3.33333 12.2381 3.33333 12.1733ZM12.6667 12.1733C12.6667 12.3042 12.6147 12.4297 12.5222 12.5222C12.4297 12.6147 12.3042 12.6667 12.1733 12.6667H11.3333V11.3333H12.6667V12.1733Z"
                  fill="#78828A"
                />
              </g>
              <defs>
                <clipPath id="clip0_201_5913">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-12-500 pl-1">Action • Crime</p>
          </div>
          <div className="flex mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.4416 2.92495L12.9083 5.85828C13.1083 6.26662 13.6416 6.65828 14.0916 6.73328L16.7499 7.17495C18.4499 7.45828 18.8499 8.69162 17.6249 9.90828L15.5583 11.9749C15.2083 12.3249 15.0166 12.9999 15.1249 13.4833L15.7166 16.0416C16.1833 18.0666 15.1083 18.8499 13.3166 17.7916L10.8249 16.3166C10.3749 16.0499 9.63326 16.0499 9.17492 16.3166L6.68326 17.7916C4.89992 18.8499 3.81659 18.0583 4.28326 16.0416L4.87492 13.4833C4.98326 12.9999 4.79159 12.3249 4.44159 11.9749L2.37492 9.90828C1.15826 8.69162 1.54992 7.45828 3.24992 7.17495L5.90826 6.73328C6.34992 6.65828 6.88326 6.26662 7.08326 5.85828L8.54992 2.92495C9.34992 1.33328 10.6499 1.33328 11.4416 2.92495Z"
                fill="#FFCD1A"
              />
            </svg>
            <p className=" pl-1 text-16-600">8.5</p>
          </div>
        </div>
        <div className="dark:text-white flex ">
          <button
            className="flex px-6 py-3 border-solid border-2 rounded-2xl h-12"
            onClick={handleShare}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g>
                <path
                  d="M18 15C17.2144 15.0006 16.4604 15.3094 15.9 15.86L8.00003 12.34V12V11.67L15.9 8.13999C16.3948 8.62501 17.0423 8.9238 17.7324 8.9856C18.4225 9.04741 19.1128 8.86843 19.6859 8.47906C20.259 8.08969 20.6797 7.51393 20.8765 6.84958C21.0733 6.18523 21.034 5.47325 20.7654 4.83455C20.4968 4.19585 20.0154 3.66982 19.4029 3.3458C18.7905 3.02179 18.0848 2.91975 17.4056 3.05704C16.7265 3.19433 16.1158 3.56246 15.6773 4.09893C15.2388 4.63539 14.9995 5.30711 15 5.99999V6.33999L7.10003 9.85999C6.67839 9.44575 6.14378 9.16529 5.5633 9.05382C4.98282 8.94235 4.38235 9.00485 3.83726 9.23346C3.29218 9.46207 2.82677 9.84661 2.49947 10.3388C2.17217 10.831 1.99756 11.4089 1.99756 12C1.99756 12.5911 2.17217 13.169 2.49947 13.6612C2.82677 14.1534 3.29218 14.5379 3.83726 14.7665C4.38235 14.9951 4.98282 15.0576 5.5633 14.9462C6.14378 14.8347 6.67839 14.5542 7.10003 14.14L15 17.67V18C15 18.5933 15.176 19.1734 15.5056 19.6667C15.8353 20.16 16.3038 20.5446 16.852 20.7716C17.4002 20.9987 18.0034 21.0581 18.5853 20.9423C19.1672 20.8266 19.7018 20.5409 20.1214 20.1213C20.5409 19.7018 20.8266 19.1672 20.9424 18.5853C21.0581 18.0033 20.9987 17.4001 20.7717 16.8519C20.5446 16.3038 20.1601 15.8352 19.6667 15.5056C19.1734 15.1759 18.5934 15 18 15Z"
                  fill="#171725"
                />
              </g>
              <defs>
                <clipPath id="clip0_201_5935">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="ml-2 text-18-600 text-Grayscale100 dark:text-white">
              Share
            </p>
          </button>
        </div>
      </div>
      <div className="dark:text-white">
        Audio descriptions (ADs) make movies accessible to millions of blind or
        visually impaired people.Footnote1 AD—sometimes also referred to as
        descriptive video service (DVS)—provides an audio narrative of the “most
        important aspects of the visual information” (Salway 2007), namely
        actions, gestures, scenes, and character appearance as can be seen in
        Figs. 1 and 2. AD is prepared by trained describers and read by
        professional narrators. While more and more movies are audio
        transcribed, it may take up to 60 person-hours to describe a 2-h movie
        (Lakritz and Salway 2006), resulting in the fact that today only a small
        subset of movies and TV programs are available for the blind.
        Consequently, automating this process has the potential to greatly
        increase accessibility to this media content.
      </div>
      
    </div>
  );
}
