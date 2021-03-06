import { VFC } from "react";

type Props = {
  country: {
    code: string;
    name: string;
    emoji: string;
  };
};

export const Index: VFC<Props> = (props: any) => {
  return (
    <div className="flex shadow rounded py-2 px-7 my-6 items-center prose max-w-3xl">
      <div className="flex flex-wrap justify-center">
        <h3>
          <a href="#country-name" aria-hidden="true" className="aal_anchor" id="country-name">
            <svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16">
              <path
                fillRule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              ></path>
            </svg>
          </a>
          {props.country.name}
        </h3>
        {props.country.code} - {props.country.emoji}
      </div>
    </div>
  );
};
