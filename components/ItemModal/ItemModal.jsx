"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
function ItemModal({ item }) {
  const [post, setPost] = React.useState(null);
  const isFirstView = useAppSelector((state) => state.first_view);
  const router = useRouter();

  React.useEffect(() => {
    setPost(item);
  }, [item]);

  function handleCloseModal() {
    if (isFirstView) {
      router.push("/list/1");
    } else {
      router.back();
    }
  }

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      {post && (
        <Modal
          show={true}
          onHide={handleCloseModal}
          backdrop={true}
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>{post.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{post.text}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleCloseModal}>
              Назад к списку
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default ItemModal;
