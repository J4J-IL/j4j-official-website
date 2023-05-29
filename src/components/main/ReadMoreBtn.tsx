import { InfoIcon } from '@/components/icons';

export const ReadMoreBtn = () => (
  <button
    className="rounded-xl border-2 border-white-50 bg-aqua
    px-6 py-1 text-black shadow-readmore
    "
  >
    <div
      className="flex w-full content-evenly
        justify-evenly "
    >
      <span className="ml-4">
        <InfoIcon
          // className="h-[27px] w-[27px]"
          // OR
          height="27"
          width="27"
        />
      </span>
      <span>קראו עלינו עוד...</span>
    </div>
  </button>
);
