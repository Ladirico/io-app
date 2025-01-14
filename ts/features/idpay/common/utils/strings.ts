import * as O from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";
import { formatNumberAmount } from "../../../../utils/stringBuilder";
import { format } from "../../../../utils/dates";

export const formatNumberCurrency = (amount: number) =>
  `${formatNumberAmount(amount, false)} €`;

export const formatNumberCurrencyCents = (cents: number) =>
  formatNumberCurrency(cents / 100);

export const formatNumberCurrencyOrDefault = (
  input: number | undefined,
  defaultValue: string = "-"
) =>
  pipe(
    input,
    O.fromNullable,
    O.map(formatNumberCurrency),
    O.getOrElse(() => defaultValue)
  );

export const formatNumberCurrencyCentsOrDefault = (
  input: number | undefined,
  defaultValue: string = "-"
) =>
  pipe(
    input,
    O.fromNullable,
    O.map(formatNumberCurrencyCents),
    O.getOrElse(() => defaultValue)
  );

/**
 *   Takes a nullable date and formats it to a string.
 *   - Base default : '-'
 *   - Base format: 'D MMMM YYYY, HH:mm'
 *   - Uses date_fns as formatter
 */
export const formatDateOrDefault = (
  input?: Date,
  defaultValue: string = "-",
  dateFormat: string = "D MMMM YYYY, HH:mm"
) =>
  pipe(
    input,
    O.fromNullable,
    O.map(date => format(date, dateFormat)),
    O.getOrElse(() => defaultValue)
  );
