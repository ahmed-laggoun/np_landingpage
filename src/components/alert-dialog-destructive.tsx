import { Trash2Icon, LucideIcon } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface AlertDialogDestructiveProps {
  trigger?: React.ReactNode
  icon?: LucideIcon
  title?: string
  description?: React.ReactNode
  cancelText?: string
  confirmText?: string
  onConfirm?: () => void
  onCancel?: () => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function AlertDialogDestructive({
  trigger,
  icon: Icon = Trash2Icon,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  cancelText = "Cancel",
  confirmText = "Delete",
  onConfirm,
  onCancel,
  open,
  onOpenChange,

}: AlertDialogDestructiveProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      {trigger && <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>}
      <AlertDialogContent className="max-w-sm">
        <AlertDialogHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Icon className="w-5 h-5" />
          </div>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-white hover:bg-destructive/90"
            onClick={onConfirm}
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
