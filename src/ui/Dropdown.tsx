'use client';
import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./dropdown.module.scss";

interface DropdownItem {
  icon: ReactNode;
  value: string;
}

interface DropdownProps {
  items: DropdownItem[];
  defaultValue?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ items, defaultValue }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    items.find((item) => item.value === defaultValue) || items[0]
  );

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
        {selectedItem.icon}
        {selectedItem.value}
      </button>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={styles.list}
        >
          {items.map((item) => (
            <li
              key={item.value}
              onClick={() => {
                setSelectedItem(item);
                setIsOpen(false);
              }}
              className={styles.item}
            >
              {item.icon}
              {item.value}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};