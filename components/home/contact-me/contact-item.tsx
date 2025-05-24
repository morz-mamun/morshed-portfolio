"use client"
export default function ContactItem({ icon: Icon, title, content, isLink } : any){
    return (
         <div className="flex gap-5 items-start">
      <div className="h-fit p-2 rounded-full shadow-2xl flex items-center justify-center text-3xl">
        <Icon className="dark:text-brand" />
      </div>
      <div className="space-y-1">
        <p className="uppercase">{title}</p>
        {isLink ? (
          <a
            href={`mailto:${content}`}
            className="text-textPrimary dark:text-textSecondary text-sm"
          >
            {content}
          </a>
        ) : (
          <p className="text-textPrimary dark:text-textSecondary text-sm">
            {content}
          </p>
        )}
      </div>
    </div>
    )
}