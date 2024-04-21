package com.example.stock.facade;

import com.example.stock.repository.LockRepository;
import com.example.stock.repository.RedisLockRepository;
import com.example.stock.service.StockService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class LettuceLockStockFacade {

    private final RedisLockRepository lockRepository;
    private final StockService stockService;

    public LettuceLockStockFacade(RedisLockRepository lockRepository, StockService stockService) {
        this.lockRepository = lockRepository;
        this.stockService = stockService;
    }

    @Transactional
    public void decrease(Long id, Long quantity) throws InterruptedException {
        while (!lockRepository.lock(id)) {
            Thread.sleep(100);
        }
        try {
            stockService.decreaseInNewTransaction(id, quantity);
        } finally {
            lockRepository.unlock(id);
        }
    }
}
