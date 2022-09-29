import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import config from "../config";

// const useFetchUser = () => {
//   return useQuery<Claim[], AxiosError>("user", () =>
//     axios
//       .get(`${config.baseApiUrl}/account/getuser?slide=false`)
//       .then((resp) => resp.data)
//   );
// };
