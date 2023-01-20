import { ChangeEvent, UIEvent, useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { RowItem } from "./components/RowItem";
import { faker } from "@faker-js/faker";

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

function App() {
  const [users, setUsers] = useState<IUser[]>(mockData.slice(0, 20));
  const [currentPage, setCurrentPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(0);
  const [seed, setSeed] = useState<string | number>("");
  const [country, setCountry] = useState("ru");

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setUsers(prev => [
          ...prev,
          ...mockData.slice(currentPage, currentPage + 10)
        ]);
        setCurrentPage(prev => prev + 1);
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (isLoading) {
      e.preventDefault();
      return;
    }
    if (target.scrollHeight - (target.scrollTop + target.clientHeight) < 100) {
      setIsLoading(true);
    }
  };

  const handleErrorsInput =
    (type: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = +e.target.value;
      if (type === "range") {
        setErrors(value);
      } else {
        setErrors(value / 100);
      }
    };

  const handleGenerateSeed = () => {
    const length = faker.random.numeric();
    const seed = faker.random.numeric(+length);
    setSeed(seed + currentPage);
  };

  const handleSeedInput = (e: ChangeEvent<HTMLInputElement>) => {
    // transform string into number ?
    setSeed(e.target.value + currentPage);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div className="container mx-auto h-full py-4 flex flex-col justify-between font-semibold">
      <div className="border h-20 flex items-center justify-around divide-x rounded-xl">
        <div className="w-2/12 flex flex-col">
          <p className="self-center text-xl">Country</p>
          <select
            value={country}
            onChange={handleCountryChange}
            className="w-full border border-stone-900 rounded-md px-1.5"
          >
            <option value="ru">Россия</option>
            <option value="us">USA</option>
            <option value="pl">Polska</option>
          </select>
        </div>
        <div className="w-5/12 flex flex-col items-center">
          <p className="text-xl">Erorrs</p>
          <div className="flex items-center w-full">
            <div className="flex w-full">
              <span className="w-10 text-right">0</span>
              <input
                type="range"
                min={0}
                max={10}
                step={0.25}
                className="w-10/12 mx-1.5"
                onChange={handleErrorsInput("range")}
                value={errors}
              />
              <span className="w-10">{errors.toFixed(2)}</span>
            </div>
            <input
              type="number"
              min={0}
              max={1000}
              step={25}
              value={errors * 100}
              onChange={handleErrorsInput("number")}
              className="mx-6 pl-1 border border-stone-900 rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center w-4/12 flex-col">
          <p className="text-xl">Seed</p>
          <div className="flex justify-between w-10/12">
            <input
              type="text"
              className="border border-stone-900 rounded-md px-1.5"
              value={seed}
              onChange={handleSeedInput}
            />
            <button
              onClick={handleGenerateSeed}
              className="border w-32 border-stone-900 rounded-md bg-teal-300"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-5/6 border-t border-b border-l">
        <div className="h-full divide-y overflow-auto" onScroll={scrollHandler}>
          {users.map((entry, i) => (
            <RowItem key={i} user={entry} number={i + 1} />
          ))}
          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
}

export default App;
