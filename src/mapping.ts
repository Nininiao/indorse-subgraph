import { BigInt } from "@graphprotocol/graph-ts"
import { IND, Pause, Unpause, Transfer, Approval } from "../generated/IND/IND"
import { ExampleEntity } from "../generated/schema"

export function handlePause(event: Pause): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.indCommunity(...)
  // - contract.name(...)
  // - contract.indVestingDeposit(...)
  // - contract.approve(...)
  // - contract.totalSupply(...)
  // - contract.indFutureDeposit(...)
  // - contract.indFuture(...)
  // - contract.transferFrom(...)
  // - contract.indCommunityDeposit(...)
  // - contract.decimals(...)
  // - contract.unpause(...)
  // - contract.indPreSale(...)
  // - contract.indPresaleDeposit(...)
  // - contract.version(...)
  // - contract.paused(...)
  // - contract.indSeedDeposit(...)
  // - contract.balanceOf(...)
  // - contract.indInflation(...)
  // - contract.indVesting(...)
  // - contract.indSale(...)
  // - contract.pause(...)
  // - contract.owner(...)
  // - contract.symbol(...)
  // - contract.transfer(...)
  // - contract.indSaleDeposit(...)
  // - contract.allowance(...)
  // - contract.indInflationDeposit(...)
  // - contract.indSeed(...)
}

export function handleUnpause(event: Unpause): void {}

export function handleTransfer(event: Transfer): void {}

export function handleApproval(event: Approval): void {}
