import React, { useState } from "react";
import BackButton from "../components/Backbutton";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  return <div></div>;
};

export default DeleteBook;
