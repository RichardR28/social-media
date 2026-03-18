"use client"

import { useEffect } from "react";
import { ptBR } from "react-day-picker/locale";
import { Calendar } from "@/components/ui/calendar"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { CustomField } from "../";

type CustomDateProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  description?: string;
}

export default function CustomDate({ open, onOpenChange, value, onChange, label, description }: CustomDateProps) {
  function formatDate(date: Date | undefined) {
    if (!date) {
      return ""
    }

    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  function parseDate(dateStr: string): Date | undefined {
    if (!dateStr) return undefined;
    const [day, month, year] = dateStr.split("/").map(Number);
    if (!day || !month || !year) return undefined;
    return new Date(year, month - 1, day);
  }

  useEffect(() => {
    if (!value) {
      onChange(formatDate(new Date()))
    }
  }, [])

  return (
    <CustomField label={label} description={description}>
      <InputGroup>
        <InputGroupInput
          id="date-required"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              onOpenChange(true)
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild>
              <InputGroupButton
                id="date-picker"
                variant="ghost"
                size="icon-xs"
                aria-label="Select date"
              >
                <CalendarIcon />
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                selected={parseDate(value)}
                month={parseDate(value)}
                locale={ptBR}
                onSelect={(date) => {
                  onChange(formatDate(date))
                  onOpenChange(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
    </CustomField>
  )
}
