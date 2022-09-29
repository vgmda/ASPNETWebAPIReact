import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { House } from "../types/houses";
import Problem from "../types/problem";

// const useFetchUser = () => {
//   return useQuery<Claim[], AxiosError>("user", () =>
//     axios
//       .get(`${config.baseApiUrl}/account/getuser?slide=false`)
//       .then((resp) => resp.data)
//   );
// };
