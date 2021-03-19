export default function Sep({ className = 'h-8', ...props }) {
  return <div className={`${className} bg-transparent border-none`} {...props} />;
}
