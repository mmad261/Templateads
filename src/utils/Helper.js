import { faClipboard, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

export const handleCopyToClipboard = (
  text,
  index,
  setIcons,
  setIconClasses
) => {
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("لینک کپی شد");
    } catch (err) {
      fallbackCopy(text);
    } finally {
      handleIconChange(index, setIcons, setIconClasses);
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    toast.success("لینک کپی شد");
  };

  copyText();
};

export const extractNameFromConfigURL = (url) => {
  const namePattern = /#([^#]*)/;
  const match = url.match(namePattern);

  if (match) return decodeURIComponent(match[1]);

  if (url.startsWith("vmess://")) {
    const encodedString = url.replace("vmess://", "");
    const decodedString = atob(encodedString);
    try {
      return JSON.parse(decodedString).ps;
    } catch (error) {
      console.error("Invalid vmess URL format:", error);
      return null;
    }
  }
  return null;
};

export const handleIconChange = (index, setIcons, setIconClasses) => {
  const updateIcon = (icon, className) => {
    setIcons((prev) => {
      const newIcons = [...prev];
      newIcons[index] = icon;
      return newIcons;
    });
    setIconClasses((prev) => {
      const newClasses = [...prev];
      newClasses[index] = className;
      return newClasses;
    });
  };

  updateIcon(faCheckCircle, "icon-success");

  setTimeout(() => {
    updateIcon(faClipboard, "icon-copy");
  }, 1000);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const tehranOffset = 3.5 * 60 * 1000;
  const tehranTime = new Date(date.getTime() + tehranOffset);

  const formattedDate = tehranTime.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = tehranTime.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${formattedDate} - ${formattedTime}`;
};

export const formatExpireDate = (expire) => {
  let date;
  if (typeof expire === "number") {
    date = new Date(expire * 1000);
  } else if (typeof expire === "string") {
    date = new Date(expire);
  } else {
    throw new Error("Invalid expire format");
  }

  const formattedDate = date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${formattedDate} - ${formattedTime}`;
};

export const calculateRemainingTime = (expire) => {
  let expireTimestamp;
  if (typeof expire === "number") {
    expireTimestamp = expire;
  } else if (typeof expire === "string") {
    expireTimestamp = Math.floor(new Date(expire).getTime() / 1000);
  } else {
    throw new Error("Invalid expire format");
  }

  const remainingSeconds = expireTimestamp - Math.floor(Date.now() / 1000);
  if (remainingSeconds <= 0) return "تمام شده";

  const days = Math.floor(remainingSeconds / (60 * 60 * 24));
  const hours = Math.floor((remainingSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);

  if (days > 0) return `${days} روز, ${hours} ساعت`;
  if (hours > 0) return `${hours} ساعت, ${minutes} دقیقه`;
  return `${minutes} دقیقه`;
};

export const formatTraffic = (bytes) => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let i = 0;

  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }

  return `${bytes.toFixed(2)} ${units[i]}`;
};