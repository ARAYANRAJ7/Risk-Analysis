const dummyData = [
    {
      "source_address": "1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx",
      "risk_score": "89%",
      "risk": "Highly Risky",
      "level_vise_risk_analysis": [
        {
          "level": 1,
          "risk_percentage": "85%",
          "risky_entities_count": 3,
          "non_risky_entities_count": 1,
          "total_coinjoin": 2,
          "total_flagged": 1,
          "beneficiary_details": [
            {
              "beneficiary_address": "3Cbq7aT1tY8kMxWLbitaG7yT6bPbKChq64",
              "amount": 0.75,
              "date": "06:02:2025 14:30:00",
              "transactions": [
                {
                  "tx_amount": 0.75,
                  "date_time": "06:02:2025 14:30:00",
                  "transaction_id": "f5d8ee39c1e07f9bb5db2831ebf6177886a84b65b4c5472d8be515fb2d6d25b1"
                }
              ],
              "entity_name": "Darknet Market",
              "token_type": "BTC",
              "transaction_type": "Transfer"
            }
          ],
          "payer_details": [
            {
              "payer_address": "1PnMfRF2enSZnR6JSexxBHuQnxG8Vo5FVK",
              "amount": 1.5,
              "date": "06:02:2025 14:10:00",
              "transactions": [
                {
                  "tx_amount": 1.5,
                  "date_time": "06:02:2025 14:10:00",
                  "transaction_id": "3d3fa1b4f451cdb1a1f5c68d27e0cf66763c8c5a39a1281f5e40c615e27e4f0b"
                }
              ],
              "entity_name": "Mixing Service",
              "token_type": "BTC",
              "transaction_type": "Deposit"
            }
          ]
        }
      ]
    },
    {
      "source_address": "Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx",
      "risk_score": "18%",
      "risk": "Low Risky",
      "level_vise_risk_analysis": [
        {
          "level": 1,
          "risk_percentage": "15%",
          "risky_entities_count": 3,
          "non_risky_entities_count": 1,
          "total_coinjoin": 2,
          "total_flagged": 1,
          "beneficiary_details": [
            {
              "beneficiary_address": "3Cbq7aT1tY8kMxWLbitaG7yT6bPbKChq64",
              "amount": 0.75,
              "date": "06:02:2025 14:30:00",
              "transactions": [
                {
                  "tx_amount": 0.75,
                  "date_time": "06:02:2025 14:30:00",
                  "transaction_id": "f5d8ee39c1e07f9bb5db2831ebf6177886a84b65b4c5472d8be515fb2d6d25b1"
                }
              ],
              "entity_name": "Darknet Market",
              "token_type": "BTC",
              "transaction_type": "Transfer"
            }
          ],
          "payer_details": [
            {
              "payer_address": "1PnMfRF2enSZnR6JSexxBHuQnxG8Vo5FVK",
              "amount": 1.5,
              "date": "06:02:2025 14:10:00",
              "transactions": [
                {
                  "tx_amount": 1.5,
                  "date_time": "06:02:2025 14:10:00",
                  "transaction_id": "3d3fa1b4f451cdb1a1f5c68d27e0cf66763c8c5a39a1281f5e40c615e27e4f0b"
                }
              ],
              "entity_name": "Mixing Service",
              "token_type": "BTC",
              "transaction_type": "Deposit"
            }
          ]
        }
      ]
    }
  ];
  
  export default dummyData;

