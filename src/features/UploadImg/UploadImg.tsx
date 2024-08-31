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
  fileList,
}: {
  onChange: (info: any) => void;
  onDragEnd: ({ active, over }: DragEndEvent) => void;
  fileList: any;
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
          action={""}
          fileList={fileList}
          onChange={onChange}
          itemRender={(originNode, file) => (
            <DraggableUploadListItem originNode={originNode} file={file} />
          )}
        >
          <Button
            icon={<UploadIcon />}
            className={s.button}
            onClick={() => {
              event?.preventDefault;
            }}
          >
            <p>
              Image size should be: 948*500, <br /> not more than 5MB
            </p>
          </Button>
        </Upload>
      </SortableContext>
    </DndContext>
  );
};

export default UploadImg;

// import React, { useState } from "react";
// import s from "./UploadImg.module.scss";
// import { manageImgApi } from "../../api/property/manageImg"; // Импорт вашего API класса

// interface UploadImgProps {
//   id: number;
// }

// const UploadImg: React.FC<UploadImgProps> = ({ id }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert("Please select a file first!");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("image", selectedFile);

//       // Вызов API для загрузки изображения
//       await manageImgApi.uploadImg(id, formData);
//       alert("Image uploaded successfully!");
//     } catch (error) {
//       console.error("Image upload failed", error);
//       alert("Image upload failed.");
//     }
//   };

//   return (
//     <div className={s.uploadImg}>
//       <input type="file" onChange={handleFileChange} multiple />
//       <button onClick={handleUpload}>Upload Image</button>
//     </div>
//   );
// };

// export default UploadImg;
