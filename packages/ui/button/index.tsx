import React from "react";
import { Pressable, PressableProps } from "react-native";
import { cssInterop } from "nativewind";
import { cn } from "ui/utils/cn";
import { Text } from "ui/text";
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "rounded-full items-center flex-row justify-center h-12",
  {
    variants: {
      variant: {
        default: "bg-purple-600",
        secondary: "bg-[#2D1B69]",
      },
    },
    defaultVariants: {
      variant: "default",
    }
  }
);

interface ButtonProps extends PressableProps, VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
  rightIcon?: React.ReactNode;
}

cssInterop(Pressable, {
  className: "style",
});

export const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ children, className, textClassName, variant, rightIcon, ...props }, ref) => {
    let content = children;
    if (typeof content === "string") {
      content = (
        <Text
          className={cn(
            "font-semibold text-base text-center text-white",
            textClassName
          )}
        >
          {children}
        </Text>
      );
    }

    return (
      <Pressable
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      >
        {content}
        {rightIcon}
      </Pressable>
    );
  }
);

Button.displayName = "Button";