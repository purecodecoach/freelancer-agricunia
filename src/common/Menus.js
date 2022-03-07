import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { Fragment } from "react";

const Menus = ({
  as,
  className,
  displayType,
  position,
  activeStatus,
  itemsClassName,
  menuButtonIcon,
  handleItemClick,
  itemClassName,
  itemLable,
  textClassName,
  icons,
}) => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Menu as={as} className={className}>
        <div className={displayType}>
          <div className={position}>
            <Menu.Button>{menuButtonIcon}</Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className={itemsClassName}>
                <div className="py-1">
                  {itemLable.map((item, i) => {
                    return (
                      <Menu.Item>
                        {({ activeStatus }) => (
                          <a
                            onClick={() => {
                              handleItemClick(item);
                            }}
                            className={classNames(
                              activeStatus
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              `${itemClassName} `
                            )}
                          >
                            {icons !== undefined ? (
                              <span className={textClassName}>
                                <div className="flex items-center">
                                  <div className="mr-2">
                                    <span class="material-icons text-scogogray">
                                      {icons[i]}
                                    </span>
                                  </div>
                                  {item}
                                </div>
                              </span>
                            ) : (
                              <span className={textClassName}>{item}</span>
                            )}
                          </a>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </div>
        </div>
      </Menu>
    </>
  );
};

export default Menus;
