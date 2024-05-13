export const TwitterLogo = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className={className} {...props}>
    <path
      fill="currentColor"
      d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.601 0Zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837Z"
    ></path>
  </svg>
)

export default TwitterLogo
