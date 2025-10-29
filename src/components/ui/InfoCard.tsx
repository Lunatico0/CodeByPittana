import ButtonSecondary from '@ui/ButtonSecondary';
import React from 'react'

interface contactProps {
  Icon?: React.ElementType;
  name: string;
  href: string;
}

interface dataProps {
  data: contactProps[];
}

const InfoCard = ({ data }: dataProps) => {
  return (
    <>
      {data.map((contact) => {
        const IconComponent = contact.Icon;
        if (!IconComponent) return null;
        return (
          <ButtonSecondary
            key={contact.name}
            as="a"
            href={contact.href}
            className="border-none !p-0 bg-transparent text-text/60 hover:text-primary transition-colors hover:bg-transparent"
          >
            <IconComponent />
          </ButtonSecondary>
        )
      })}
    </>
  )
}

export default InfoCard
