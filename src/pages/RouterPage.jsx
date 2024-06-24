import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Introduction from './Introduction'
import CardSection from './Components/Card/Card'
import ButtonSection from './Components/Button/Button'
import AccordionSection from './Components/Accordion/Accordion'
import AlertSection from './Components/Alert/Alert'
import AlertDialogSection from './Components/AlertDialog/AlertDialog'
import BadgeSection from './Components/Badge/Badge'
import CalendarSection from './Components/Calendar/Calendar'
import CarouselSection from './Components/Carousel/Carousel'
import CheckboxlSection from './Components/Checkbox/Checkbox'
import ComboboxlSection from './Components/Combobox/Combobox'
import CommandSection from './Components/Command_/Command'
import SelectSection from './Components/Select/Select'
import DatePickerSection from './Components/DatePicker/DatePicker'
import DialogSection from './Components/Dialog/Dialog'
import DrawerSection from './Components/Drawer/Drawer'
import DropDownSection from './Components/DropDown/DropDown'
import HoverCardSection from './Components/HoverCard/HoverCard'
import InputSection from './Components/Input/Input'
import InputOTPSection from './Components/InputOTP/InputOTP'
import MenuBarSection from './Components/MenuBar/MenuBar'
import NavigationMenuSection from './Components/NavigationMenu/NavigationMenu'
import PaginationSection from './Components/Pagination/Pagination'
import PopOverSection from './Components/PopOver/PopOver'
import ProgressSection from './Components/Progress/Progress'
import RadioGroupSection from './Components/RadioGroup/RadioGroup'
import SliderSection from './Components/Slider/Slider'
import SwitchSection from './Components/Switch/Switch'
import TabsSection from './Components/Tabs/Tabs'
import Installation from './Installation'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/introduction' element={<Introduction/>} />
            <Route path='/installation' element={<Installation/>} />

            <Route path='/accordion' element={<AccordionSection/>} />
            <Route path='/alert' element={<AlertSection/>} />
            <Route path='/alert-dialog' element={<AlertDialogSection/>} />
            <Route path='/badge' element={<BadgeSection/>} />
            <Route path='/button' element={<ButtonSection/>} />
            <Route path='/calendar' element={<CalendarSection/>} />
            <Route path='/card' element={<CardSection/>} />
            <Route path='/carousel' element={<CarouselSection/>} />
            <Route path='/checkbox' element={<CheckboxlSection/>} />
            <Route path='/combobox' element={<ComboboxlSection/>} />
            <Route path='/command' element={<CommandSection/>} />
            <Route path='/date-picker' element={<DatePickerSection/>} />
            <Route path='/dialog' element={<DialogSection/>} />
            <Route path='/drawer' element={<DrawerSection/>} />
            <Route path='/dropdown-menu' element={<DropDownSection/>} />
            <Route path='/hover-card' element={<HoverCardSection/>} />
            <Route path='/input' element={<InputSection/>} />
            <Route path='/input-otp' element={<InputOTPSection/>} />
            <Route path='/menubar' element={<MenuBarSection/>} />
            <Route path='/navigation-menu' element={<NavigationMenuSection/>} />
            <Route path='/pagination' element={<PaginationSection/>} />
            <Route path='/popover' element={<PopOverSection/>} />
            <Route path='/progress' element={<ProgressSection/>} />
            <Route path='/radio-group' element={<RadioGroupSection/>} />
            <Route path='/select' element={<SelectSection/>} />
            <Route path='/slider' element={<SliderSection/>} />
            <Route path='/switch' element={<SwitchSection/>} />
            <Route path='/tabs' element={<TabsSection/>} />

            {/* <Route path='*' element={<NotFound/>} /> */}
        </Routes>
     </Router>
  )
}