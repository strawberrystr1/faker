import { RowItem } from "./components/RowItem";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { useRef, useState } from "react";
import ExampleWrapper from "./components/Wrapper";

export interface IUser {
  id: string;
  name: string;
  address: string;
  phone: string;
}

const mockData = [
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      " Jędrzejów, Województwo lubelskie, bulw. Żurawski 444 / 20, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  },
  {
    id: "9f9dbc0fff74a0a3e65045de",
    name: "Абрамов Владислав Максимович",
    address:
      "Poland, Województwo lubelskie Jędrzejów, bulw. Żurawski 444, 2020202",
    phone: "+48 (845) 731-322"
  }
];

const Row = ({ index, style }: any) => <div style={style}>Row {index}</div>;

function App() {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const [items, setItems] = useState<IUser[]>(mockData.slice(0, 20));

  const loadNextPage = (start: number) => {
    setIsNextPageLoading(true);
    setTimeout(() => {
      setHasNextPage(items.length < 1000);
      setIsNextPageLoading(false);
      setItems(prev => [...prev, ...mockData.slice(start, start + 10)]);
    }, 1500);
  };

  return (
    <div className="container mx-auto h-full py-4 flex flex-col justify-between">
      <div className="border h-20"></div>
      <div className="h-5/6 divide-y">
        <ExampleWrapper
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          items={items}
          loadNextPage={loadNextPage}
        />
        {/* {mockData.map((entry, i) => (<RowItem key={i} user={entry} number={i+1} />))} */}
      </div>
    </div>
  );
}

export default App;
