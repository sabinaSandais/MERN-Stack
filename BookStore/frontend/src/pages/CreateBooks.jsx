import React, { useState } from "react";
import BackButton from "../components/Backbutton";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.post("http://localhost:5555/books", data).then(() => {
      setLoading(false);
      navigate("/");
    });
  };

  return <div>Create Books</div>;
};
export default CreateBooks;
