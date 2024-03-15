import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const ClientRemoveTags = (html: any) => {
  // Regular expression to match HTML tags
  const tagRegex = /<[^>]*>|&nbsp;/g;

  // Remove HTML tags using regex
  const textWithoutTags = html.replace(tagRegex, '');

  return textWithoutTags;
};

export const ServerRemoveTags = (html:any) => {
  // Regular expression to match HTML tags
  const tagRegex = /<[^>]*>|&nbsp;/g;

  // Remove HTML tags using regex
  const textWithoutTags = html.replace(tagRegex, '');

  return textWithoutTags;
};