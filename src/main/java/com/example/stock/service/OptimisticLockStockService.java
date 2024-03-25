package com.example.stock.service;

import com.example.stock.domain.OptimisticLockStock;
import com.example.stock.domain.Stock;
import com.example.stock.repository.OptimisticLockStockRepository;
import com.example.stock.repository.StockRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OptimisticLockStockService {

    private final OptimisticLockStockRepository stockRepository;

    public OptimisticLockStockService(OptimisticLockStockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    @Transactional
    public void decrease(Long id, Long quantity) {
        OptimisticLockStock stock = stockRepository.findByIdWithOptimisticLock(id);

        stock.decrease(quantity);

        stockRepository.saveAndFlush(stock);
    }
}
