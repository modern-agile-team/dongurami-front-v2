import { ModalPopup } from "@/components/Design";
import { Row } from "@/components/Layouts";
import { Typography } from "@/components/Utilities";
import { Icon } from "@/components/Svg";

interface ModalTitleProps {
  title: string[];
}

interface ComponentProps {
  openModal?: (type: string) => void;
  onClick?: () => Promise<void> | void;
  modalType?: string;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ title }) => {
  return (
    <>
      {title.map((item, index) => {
        return (
          <Typography
            typoSize="Head10"
            typoColor={index % 2 ? "accent_100" : "neutral_50"}
            key={index}
            style={{
              whiteSpace: "pre",
            }}
          >
            {item}
          </Typography>
        );
      })}
    </>
  );
};

export const Notice: React.FC<ComponentProps> = ({ openModal }) => {
  return (
    <>
      <ModalPopup.Title>
        <Row verticalAlign="center">
          <Icon
            name="Notice32"
            size={24}
            fill="accent_100"
            style={{
              marginRight: 6,
            }}
          />
          <ModalTitle title={["게시글을 ", "공지", "로 등록 하시겠습니까?"]} />
        </Row>
      </ModalPopup.Title>
      <ModalPopup.Contents>
        <Typography
          typoSize="RHead13"
          typoColor={"neutral_50"}
          style={{
            marginTop: 6,
          }}
        >
          동아리원들에게 이야기를 공유해요
        </Typography>
      </ModalPopup.Contents>

      <ModalPopup.Bottom
        cancelText="취소"
        confirmText="등록"
        onConfirm={(_, hide) => {
          hide();
          if (openModal) {
            setTimeout(() => {
              openModal("noticeComplete");
            }, 500);
          }
        }}
      />
    </>
  );
};
export const NoticeComplete: React.FC<ComponentProps> = ({ onClick }) => {
  return (
    <>
      <ModalPopup.Title>
        <Row verticalAlign="center">
          <Icon
            name="Notice32"
            size={24}
            fill="accent_100"
            style={{
              marginRight: 6,
            }}
          />
          <ModalTitle title={["공지 등록", " 완료", "!"]} />
        </Row>
      </ModalPopup.Title>

      <ModalPopup.Bottom
        cancelText="홈으로 돌아가기"
        confirmText="공지 보러가기"
        onConfirm={(_, hide) => {
          hide();
          onClick && onClick();
        }}
        onCancel={() => {
          onClick && onClick();
        }}
      />
    </>
  );
};

export const CommentModal: React.FC<ComponentProps> = ({
  onClick,
  modalType,
}) => {
  const content =
    modalType === "delete" ? "등록" : "commentUpdate" ? "수정" : "삭제";
  return (
    <>
      <ModalPopup.Title>
        <Row verticalAlign="center">
          <Icon
            name="Notice32"
            size={24}
            fill="accent_100"
            style={{
              marginRight: 5,
            }}
          />
          <ModalTitle title={["댓글을 ", content, "하시겠습니까?"]} />
        </Row>

        {modalType === "comment" && (
          <ModalPopup.Contents>
            <Typography
              typoSize="RHead13"
              typoColor={"neutral_50"}
              style={{
                marginTop: 6,
              }}
            >
              동아리원들과 함께 소통해요
            </Typography>
          </ModalPopup.Contents>
        )}
      </ModalPopup.Title>

      <ModalPopup.Bottom
        cancelText="취소"
        confirmText={content}
        onConfirm={(_, hide) => {
          hide();
          onClick && onClick();
        }}
      />
    </>
  );
};

export const DeleteModal: React.FC<ComponentProps> = ({
  modalType,
  onClick,
}) => {
  const content = modalType === "update" ? "수정" : "삭제";
  return (
    <>
      <ModalPopup.Title>
        <Row verticalAlign="center">
          <Icon
            name="Deletion32"
            size={24}
            fill="accent_100"
            style={{
              marginRight: 5,
            }}
          />
          <ModalTitle title={["게시글을 ", content, "하시겠습니까?"]} />
        </Row>
      </ModalPopup.Title>

      <ModalPopup.Bottom
        cancelText="취소"
        confirmText={content}
        onConfirm={(_, hide) => {
          hide();
          onClick && onClick();
        }}
      />
    </>
  );
};
