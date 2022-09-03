// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Box is Initializable {
    uint private _value;
    address private _owner;

    event ValueChanged(uint value);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        _owner = msg.sender;
    }

    function store(uint value) public {
        require(msg.sender == _owner, "Box: not owner");

        _value = value;
        emit ValueChanged(value);
    }

    function retrieve() public view returns (uint) {
        return _value;
    }
}
