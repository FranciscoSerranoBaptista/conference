import clsx from 'clsx'

export function BackgroundImage({
  className,
  position = 'left',
}: {
  className?: string
  position?: 'left' | 'right'
}) {
  return (
    <div
      className={clsx(
        'absolute inset-0 overflow-hidden bg-indigo-50',
        className,
      )}
    >
      {/* Background image placeholder - can be replaced with actual image later */}
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-white" />
    </div>
  )
}
