/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DeviceModel class.
 * @constructor
 * @member {string} [name]
 * 
 * @member {string} [manufacturer]
 * 
 * @member {string} [model]
 * 
 * @member {string} [platform]
 * 
 * @member {string} [dimensions]
 * 
 * @member {string} [resolution]
 * 
 * @member {string} [releaseDate]
 * 
 * @member {string} [formFactor]
 * 
 * @member {string} [screenSize]
 * 
 * @member {string} [cpu]
 * 
 * @member {string} [memory]
 * 
 */
function DeviceModel() {
}

/**
 * Defines the metadata of DeviceModel
 *
 * @returns {object} metadata of DeviceModel
 *
 */
DeviceModel.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeviceModel',
    type: {
      name: 'Composite',
      className: 'DeviceModel',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        manufacturer: {
          required: false,
          serializedName: 'manufacturer',
          type: {
            name: 'String'
          }
        },
        model: {
          required: false,
          serializedName: 'model',
          type: {
            name: 'String'
          }
        },
        platform: {
          required: false,
          serializedName: 'platform',
          type: {
            name: 'String'
          }
        },
        dimensions: {
          required: false,
          serializedName: 'dimensions',
          type: {
            name: 'String'
          }
        },
        resolution: {
          required: false,
          serializedName: 'resolution',
          type: {
            name: 'String'
          }
        },
        releaseDate: {
          required: false,
          serializedName: 'releaseDate',
          type: {
            name: 'String'
          }
        },
        formFactor: {
          required: false,
          serializedName: 'formFactor',
          type: {
            name: 'String'
          }
        },
        screenSize: {
          required: false,
          serializedName: 'screenSize',
          type: {
            name: 'String'
          }
        },
        cpu: {
          required: false,
          serializedName: 'cpu',
          type: {
            name: 'String'
          }
        },
        memory: {
          required: false,
          serializedName: 'memory',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DeviceModel;
