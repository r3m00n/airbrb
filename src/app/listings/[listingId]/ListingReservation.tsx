'use client';

import { Range } from 'react-date-range';
import Calendar from '@/components/inputs/Calendar';
import Button from '@/components/Button';

interface ListingReservationProps {
  price: number;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  dateRange: Range;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation = (props: ListingReservationProps) => {
  const {
    dateRange,
    disabledDates,
    onChangeDate,
    onSubmit,
    price,
    totalPrice,
    disabled,
  } = props;

  return (
    <div className="overflow-hidden bg-white border rounded-xl border-neutral-200">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600"> / night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={value => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button label="Reserve" disabled={disabled} onClick={onSubmit} />
      </div>
      <div className="flex flex-row items-center justify-between p-4 text-lg font-semibold">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
