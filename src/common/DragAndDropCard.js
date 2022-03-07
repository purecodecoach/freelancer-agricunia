import React from "react";

const DragandDropCards = ({
  sortable,
  data,
  onReorder,
  renderItem,
  keyExtractor,
  transitionDuration,
  separator,
  cardSize,
}) => {
  const listRef = React.useRef(null);
  const separatorsRef = React.useRef(data.map(() => React.createRef()));
  const itemsRef = React.useRef(data.map((d, i) => React.createRef()));
  const [active, setActive] = React.useState(null);
  const [currentOrder, setCurrentOrder] = React.useState(data.map((d, i) => i));

  const onSortStart = (event) =>
    sortable &&
    sortStart(
      event,
      data,
      listRef,
      itemsRef,
      separatorsRef,
      onReorder,
      setActive,
      setCurrentOrder,
      transitionDuration
    );
console.log("================================currentOrder",currentOrder);
  return (
     <div ref={listRef} className={`${cardSize}`} >
      {data.map((item, index) => (
        <div key={keyExtractor(item, index)} className="p-p-15">
          <div
          
            ref={itemsRef.current[index]}
            onMouseDown={onSortStart}
            onTouchStart={onSortStart}
            children={renderItem(item, currentOrder[index], active === index)}
          />
          {separator && index < data.length - 1 && (
            <div ref={separatorsRef.current[index]}>{separator}</div>
          )}
        </div>
      ))}
    </div>

    
  );
};

const sortStart = (
  event,
  data,
  listRef,
  itemsRef,
  separatorsRef,
  onReorder,
  setActive,
  setCurrentOrder,
  transitionDuration
) => {
  if (itemsRef.current.length < 2) return;
  if (event.type === "mousedown" && event.button > 0) return;
  if (event.type === "touchstart" && event.touches.length > 1) return;
  console.log(`itemsRef================================`, itemsRef.current)
  console.log(`listRef================================`, listRef.current)
  const list = listRef.current;
  if (list.classList.contains("is-sorting")) return;
  list.classList.add("is-sorting");

  const css = (item, css) =>
    Object.keys(css).forEach((style) => (item.style[style] = css[style]));

  css(list, {
    position: "relative",
    height: list.offsetHeight + "px",
    width: list.offsetWidth + "px",
    margin: "0px",
  });

  const separators = separatorsRef.current
    .filter((ref) => ref.current)
    .map((ref, index) => {
      const dom = ref.current;
      if (dom)
        return {
          index: index,
          dom: dom,
          left: dom.offsetLeft,
          top: dom.offsetTop,
          width: dom.offsetWidth,
          height: dom.offsetHeight,
        };
    });

  const items = itemsRef.current
    .filter((ref) => ref.current)
    .map((ref, index) => {
      const dom = ref.current;
      if (dom)
        return {
          index: index,
          dom: dom,
          left: 0,
          top: 0,
          width: dom.offsetWidth,
          height: dom.offsetHeight,
          x: dom.offsetLeft,
          y: dom.offsetTop,
          dragged: dom.contains(event.target),
        };
    });

  const dragged = items.find((item) => item.dragged);
  const spacing = items[1].top - (items[0].top + items[0].height);

  let curIndex = items.indexOf(dragged);
  let newOrder = items.map((item) => item.index);

        console.log("================================newOrder",newOrder);

  setActive(curIndex);

  draggable(event, {
    onStart: () => {
      separators.map((separator) =>
        css(separator.dom, {
          position: "absolute",
          width: separator.width + "px",
          height: separator.height + "px",
          left: separator.left + "px",
          top: separator.top + "px",
          zIndex: 1,
        })
      );

      items.map((item) => {
        css(item.dom, {
          position: "absolute",
          width: item.width + "px",
          height: item.height + "px",
        //   transform: `translateX(${item.x}px) translateY(${item.y}px)`,
          zIndex: 2,
        });
        setTimeout(() => {
          if (item.dragged) return;
          css(item.dom, {
            transition: `transform ${transitionDuration}ms ease`,
          });
        });
      });

      css(dragged.dom, { zIndex: 3 });
    },
    onMove: (delta) => {
      const draggX = dragged.left + delta.x;
      const draggY = dragged.top + delta.y;

      const dragIndex = items.reduce((acc, item) => {
        if (item.index === 0) return acc;
        const shadowCenter = draggY + dragged.height / 2;
        const itemStart = item.top - spacing / 2;
        return (acc = shadowCenter > itemStart ? 1 : curIndex);
      }, curIndex);

      console.log("================================newOrder",newOrder);
      console.log("================================curIndex",curIndex);
      console.log("================================dragIndex",dragIndex);
      if (dragIndex !== curIndex) {
        newOrder[dragIndex] = newOrder.splice(
            curIndex,
          1,
          newOrder[dragIndex]
        )[0];
        curIndex = dragIndex;

        newOrder.reduce((acc, index) => {
          const item = items[index];
          item.y = acc;
          css(item.dom, {
            transform: `translateX(${item.x}) translateY(${item.y}px)`,
          });
          return (acc += item.height + spacing);
        }, 0);

        setCurrentOrder(
          newOrder.reduce((acc, cur, idx) => {
            acc[newOrder[idx]] = idx;
            return acc;
          }, [])
        );
      }

      css(dragged.dom, {
        transform: `translateX(${draggX}px) translateY(${draggY}px)`,
      });
    },
    onEnd: () => {
      setActive(null);

      css(dragged.dom, {
        transition: `all ${transitionDuration}ms ease`,
        transform: `translateX(${dragged.x}) translateY(${dragged.y}px)`,
      });

      setTimeout(() => {
        list.style = null;
        list.classList.remove("is-sorting");
        items.map((item) => (item.dom.style = null));
        separators.map((separator) => (separator.dom.style = null));
        setCurrentOrder(items.map((item) => item.index));
        onReorder(
          items.reduce((acc, cur, idx) => {
            acc[idx] = data[newOrder[idx]];
            console.log("==============================acc",acc);
            return acc;
          }, [])
        );
      }, transitionDuration);
    },
  });
};

const draggable = (e, { onStart, onMove, onEnd }) => {
  let startPosition;

  const onDragStart = (e) => {
    const currentPosition = getPosition(e);
    onStart(startPosition);
    startPosition = currentPosition;
    const touch = e.type === "touchstart";
    window.addEventListener(touch ? "touchmove" : "mousemove", onDragMove, {
      passive: false,
    });
    window.addEventListener(touch ? "touchend" : "mouseup", onDragEnd, false);
  };

  const onDragMove = (e) => {
    const currentPosition = getPosition(e);
    const deltaPosition = {
      x: currentPosition.x - startPosition.x,
      y: currentPosition.y - startPosition.y,
    };
    onMove(deltaPosition, currentPosition);
    e.preventDefault();
  };

  const onDragEnd = (e) => {
    const currentPosition = getPosition(e);
    onEnd(currentPosition);
    const touch = e.type === "touchend";
    window.removeEventListener(touch ? "touchmove" : "mousemove", onDragMove, {
      passive: false,
    });
    window.removeEventListener(
      touch ? "touchend" : "mouseup",
      onDragEnd,
      false
    );
  };

  const getPosition = (e) => {
    const dragEvent = e.touches ? e.touches[0] || e.changedTouches[0] : e;
    return { x: dragEvent.pageX, y: dragEvent.pageY };
  };

  onDragStart(e);
};

export default DragandDropCards;
