"use client";

import { FC } from "react";
import { Accordion as FlowbiteAccordion } from "flowbite-react";
import { faqList } from "@/utils";

export const Accordion: FC = () => {
  return (
    <FlowbiteAccordion className="border-none">
      {faqList.map(({ title, description }, i: number) => (
        <FlowbiteAccordion.Panel key={i}>
          <FlowbiteAccordion.Title className="bg-slate-100 text-slate-700 p-4 mb-3 rounded-lg border border-slate-200">
            {title}
          </FlowbiteAccordion.Title>
          <FlowbiteAccordion.Content className="p-4">
            <p className="text-gray-400 text-sm">{description}</p>
          </FlowbiteAccordion.Content>
        </FlowbiteAccordion.Panel>
      ))}
    </FlowbiteAccordion>
  );
};
