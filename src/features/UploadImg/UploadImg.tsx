import React from "react";
import s from "./UploadImg.module.scss";
import { Button, Upload } from "antd";
import type { UploadFile } from "antd";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { UploadIcon } from "../../assets/icons/upload";

interface DraggableUploadListItemProps {
  originNode: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
  file: UploadFile<any>;
}

const DraggableUploadListItem = ({
  originNode,
  file,
}: DraggableUploadListItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: file.uid,
  });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: "move",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={s.isDragging ? "is-dragging" : ""}
      {...attributes}
      {...listeners}
    >
      {file.status === "error" && isDragging
        ? originNode.props.children
        : originNode}
    </div>
  );
};

const UploadImg = ({
  onChange,
  onDragEnd,
  onRemove,
  fileList,
  text,
  className,
}: {
  onChange: (info: any) => void;
  onRemove?: (file: any) => void;
  onDragEnd: ({ active, over }: DragEndEvent) => void;
  fileList?: any;
  text?: string;
  className?: string;
}) => {
  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  return (
    <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
      <SortableContext
        items={fileList.map((i: any) => i.uid)}
        strategy={verticalListSortingStrategy}
      >
        <Upload
          beforeUpload={(file) => {
            const isJPG = file.type === "image/jpeg";
            if (!isJPG) {
              console.error("You can only upload JPG file!");
            }
            return false;
          }}
          onRemove={onRemove}
          fileList={fileList}
          onChange={onChange}
          itemRender={(originNode, file) => (
            <DraggableUploadListItem originNode={originNode} file={file} />
          )}
        >
          <Button
            icon={<UploadIcon />}
            className={`${s.button} ${className}`}
            onClick={() => {
              event?.preventDefault;
            }}
          >
            {text ? (
              <p> {text}</p>
            ) : (
              <p>
                Image size should be: 948*500, <br /> not more than 5MB
              </p>
            )}
          </Button>
        </Upload>
      </SortableContext>
    </DndContext>
  );
};

export default UploadImg;

// import { Button, Upload } from "antd";
// import s from "./UploadImg.module.scss";

// const uploadImg = ({ fileList }: { fileList: [] }) => (
//   <Upload listType="picture" defaultFileList={fileList}  onChange={onChange}>
//     <Button type="primary" icon={<UploadIcon />} className={s.button}>
//       <p>
//         Image size should be: 948*500, <br /> not more than 5MB
//       </p>
//     </Button>
//   </Upload>
// );

// export default uploadImg;
