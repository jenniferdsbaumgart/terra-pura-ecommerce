import React from "react";

export const Vegan = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 2C8 7 13.5 13.5 20 20" />
      <path d="M16.5 8.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5Z" />
      <path d="M4.783 4.782C8.493 8.495 14 10 14 10s1.507 5.505 5.218 9.217" />
    </svg>
  );
};

export const Organic = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M22 10a10 10 0 0 0-7.901-9.78" />
      <path d="M8 8.5v1.5h6V8.5a2.5 2.5 0 0 0-5 0" />
      <path d="M16 12H8" />
      <path d="M8 16h6" />
      <path d="M13 12v6.5a1.5 1.5 0 0 0 3 0V12" />
    </svg>
  );
};

export const CrueltyFree = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.8 11.3 9 9l4 2 4-2" />
      <path d="M9 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M10 20.8V15l3-1.5" />
      <path d="M8 15l-3-1.5" />
      <path d="M17 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M12 9h2" />
      <circle cx="12" cy="9" r="1" />
      <path d="M17 22v-6" />
      <path d="M7 22v-6" />
      <path d="M14 22H5" />
    </svg>
  );
};
