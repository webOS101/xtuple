/**
 * Calculate the balance of a XM.CashReceipt
 * balance = amount - applied
 */
create or replace function xt.cashrcpt_balance(numeric, numeric)
returns numeric stable as $$

  select
    coalesce($2 - xt.cashrcpt_applied_amount($1, true), 0)

$$ language sql;
